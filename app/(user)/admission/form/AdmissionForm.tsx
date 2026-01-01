"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { Select, DatePicker } from "antd";
import dayjs from "dayjs";
import { FaChevronLeft, FaChevronRight, FaCheck } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { submitAdmission } from "@/app/actions/submitAdmission";
import LogoStroke from "@/public/svg/LogoStrock";

const MADRASA_OPTIONS = [
  { value: "No", label: "No" },
  ...Array.from({ length: 10 }, (_, i) => ({
    value: (i + 1).toString(),
    label: (i + 1).toString(),
  })),
];

const GENDER_OPTIONS = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
];

const EXAM_BOARD_OPTIONS = [
  { value: "CBSE", label: "CBSE" },
  { value: "SSLC", label: "SSLC" },
  { value: "ICSE", label: "ICSE" },
  { value: "Other", label: "Other" },
];

const STREAM_OPTIONS = [
  { value: "Humanities", label: "Humanities" },
  { value: "Computer Science", label: "Computer Science" },
];

const VISITED_SOCIALS_OPTIONS = [
  { value: "Yes", label: "Yes" },
  { value: "No", label: "No" },
];

const admissionSchema = z.object({
  name: z.string().min(1, "Name is required"),
  dob: z.date({
    message: "Date of Birth is required",
  }),
  gender: z.string().min(1, "Gender is required"),
  place: z.string().min(1, "Place is required"),
  fathersName: z.string().min(1, "Father's Name is required"),
  fathersOccupation: z.string().min(1, "Father's Occupation is required"),
  mothersName: z.string().min(1, "Mother's Name is required"),
  mothersOccupation: z.string().min(1, "Mother's Occupation is required"),
  address: z.string().min(1, "Address is required"),
  contactNumber: z
    .string()
    .min(10, "Invalid contact number")
    .max(15, "Invalid contact number"),
  whatsappNumber: z
    .string()
    .min(10, "Invalid WhatsApp number")
    .max(15, "Invalid WhatsApp number"),
  school: z.string().min(1, "School name is required"),
  examBoard: z.string().min(1, "Board is required"),
  examBoardOther: z.string().optional(),
  madrasaEducation: z.string().min(1, "Madrasa education is required"),
  madrasaBoard: z.string().min(1, "Madrasa board is required"),
  interestedStream: z.string().min(1, "Interested stream is required"),
  achievements: z.string().optional(),
  talentsArts: z.string().optional(),
  talentsSports: z.string().optional(),
  favoriteLeader: z.string().optional(),
  roleModel: z.string().optional(),
  lastReadBook: z.string().optional(),
  ambition: z.string().optional(),
  muslimPriority: z.string().optional(),
  optionalIbadath: z.string().optional(),
  technicalSkills: z.string().optional(),
  socialMedia: z.string().optional(),
  youtubeHabits: z.string().optional(),
  sourceOfInfo: z.string().optional(),
  visitedSocials: z.string().optional(),
});

type AdmissionFormData = z.infer<typeof admissionSchema>;

function AdmissionForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(true);

  const {
    control,
    handleSubmit,
    trigger,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<AdmissionFormData>({
    resolver: zodResolver(admissionSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      dob: undefined,
      gender: "",
      place: "",
      fathersName: "",
      fathersOccupation: "",
      mothersName: "",
      mothersOccupation: "",
      address: "",
      contactNumber: "",
      whatsappNumber: "",
      school: "",
      examBoard: "",
      examBoardOther: "",
      madrasaEducation: "",
      madrasaBoard: "",
      interestedStream: "",
      achievements: "",
      talentsArts: "",
      talentsSports: "",
      favoriteLeader: "",
      roleModel: "",
      lastReadBook: "",
      ambition: "",
      muslimPriority: "",
      optionalIbadath: "",
      technicalSkills: "",
      socialMedia: "",
      youtubeHabits: "",
      sourceOfInfo: "",
      visitedSocials: "",
    },
  });

  const steps = [
    {
      title: "Personal & Family",
      fields: [
        "name",
        "dob",
        "gender",
        "place",
        "fathersName",
        "fathersOccupation",
        "mothersName",
        "mothersOccupation",
      ] as const,
    },
    {
      title: "Contact & Academic",
      fields: [
        "address",
        "contactNumber",
        "whatsappNumber",
        "school",
        "examBoard",
        "madrasaEducation",
        "madrasaBoard",
        "interestedStream",
      ] as const,
    },
    { title: "Interests & Insights", fields: [] as const },
  ];

  const handleNext = async () => {
    const currentFields = steps[activeStep].fields;
    // Validate current step fields
    if (currentFields.length > 0) {
      const isValid = await trigger(currentFields as any);
      if (!isValid) {
        toast.error("Missing Information", {
          description: "Please fill in all required fields before proceeding.",
        });
        return;
      }
    }

    setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onSubmit = async (data: AdmissionFormData) => {
    const result = await submitAdmission(data);

    if (result.success) {
      setIsSubmitted(true);
      toast.success("Application Submitted!", {
        description: "Thank you for applying to FACE World Leadership School.",
      });
    } else {
      toast.error("Submission Failed", {
        description: result.error,
      });
    }
  };

  const examBoard = watch("examBoard");

  if (isSubmitted) {
    return <SuccessGreeting />;
  }

  return (
    <div className="bg-white p-6 md:p-12 rounded-2xl shadow-xl border border-zinc-200 max-w-4xl mx-auto my-10 min-h-[800px] flex flex-col justify-between">
      <div>
        <h2 className="text-3xl font-semibold text-center text-green-950 font-Grotesque-font mb-2">
          Application for Admission 2026
        </h2>
        <p className="text-center text-green-950/70 mb-8">
          Please fill out the details carefully.
        </p>

        {/* Stepper */}
        <div className="w-full mb-12">
          <ul className="steps  w-full">
            {steps.map((step, index) => (
              <li
                key={index}
                className={`step ${
                  index <= activeStep
                    ? "after:!bg-green after:!border-green after:!text-green-light before:!h-1 before:!bg-green-600 before:!border-green-light"
                    : "before:!bg-zinc-200 before:!h-[2px] after:!bg-green-light before:!border-zinc-200 after:!border-green-light before:!text-green after:!text-green"
                }`}
                data-content={index + 1}
              >
                <span
                  className={`${
                    index <= activeStep
                      ? "font-semibold text-green-950"
                      : "text-gray-400"
                  }`}
                >
                  {step.title}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <AnimatePresence mode="wait">
            {activeStep === 0 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Section 1: Personal Details */}
                <section className="mb-8">
                  <SectionTitle title="Personal Details" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Controller
                      name="name"
                      control={control}
                      render={({ field }) => (
                        <FInput
                          {...field}
                          label="Name of the student"
                          required
                          error={errors.name?.message}
                        />
                      )}
                    />
                    <Controller
                      name="dob"
                      control={control}
                      render={({ field }) => (
                        <FDatePicker
                          {...field}
                          label="Date of Birth"
                          required
                          placeholder="Select Date"
                          error={errors.dob?.message}
                        />
                      )}
                    />
                    <div className="form-control">
                      <Controller
                        name="gender"
                        control={control}
                        render={({ field }) => (
                          <FSelect
                            {...field}
                            label="Gender"
                            required
                            placeholder="Select Gender"
                            options={GENDER_OPTIONS}
                            error={errors.gender?.message}
                          />
                        )}
                      />
                    </div>
                    <Controller
                      name="place"
                      control={control}
                      render={({ field }) => (
                        <FInput
                          {...field}
                          label="Place"
                          required
                          placeholder="City/Town/Village"
                          error={errors.place?.message}
                        />
                      )}
                    />
                  </div>
                </section>

                {/* Section 2: Family Details */}
                <section>
                  <SectionTitle title="Family Details" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Controller
                      name="fathersName"
                      control={control}
                      render={({ field }) => (
                        <FInput
                          {...field}
                          label="Father's Name"
                          required
                          error={errors.fathersName?.message}
                        />
                      )}
                    />
                    <Controller
                      name="fathersOccupation"
                      control={control}
                      render={({ field }) => (
                        <FInput
                          {...field}
                          label="Father's Occupation"
                          required
                          error={errors.fathersOccupation?.message}
                        />
                      )}
                    />
                    <Controller
                      name="mothersName"
                      control={control}
                      render={({ field }) => (
                        <FInput
                          {...field}
                          label="Mother's Name"
                          required
                          error={errors.mothersName?.message}
                        />
                      )}
                    />
                    <Controller
                      name="mothersOccupation"
                      control={control}
                      render={({ field }) => (
                        <FInput
                          {...field}
                          label="Mother's Occupation"
                          required
                          error={errors.mothersOccupation?.message}
                        />
                      )}
                    />
                  </div>
                </section>
              </motion.div>
            )}

            {activeStep === 1 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Section 3: Contact Information */}
                <section className="mb-8">
                  <SectionTitle title="Contact Information" />
                  <div className="grid grid-cols-2 gap-6">
                    <Controller
                      name="address"
                      control={control}
                      render={({ field }) => (
                        <FTextarea
                          {...field}
                          label="Communication Address with PIN Code"
                          required
                          height="h-[130px]"
                          placeholder="Full Address"
                          error={errors.address?.message}
                        />
                      )}
                    />
                    <div className="grid gap-6">
                      <Controller
                        name="contactNumber"
                        control={control}
                        render={({ field }) => (
                          <FInput
                            {...field}
                            label="Contact Number"
                            type="tel"
                            required
                            error={errors.contactNumber?.message}
                          />
                        )}
                      />
                      <Controller
                        name="whatsappNumber"
                        control={control}
                        render={({ field }) => (
                          <FInput
                            {...field}
                            label="WhatsApp Number"
                            type="tel"
                            required
                            error={errors.whatsappNumber?.message}
                          />
                        )}
                      />
                    </div>
                  </div>
                </section>

                {/* Section 4: Academic Background */}
                <section>
                  <SectionTitle title="Academic Background" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Controller
                      name="school"
                      control={control}
                      render={({ field }) => (
                        <FInput
                          {...field}
                          label="Name of School"
                          required
                          error={errors.school?.message}
                        />
                      )}
                    />
                    <div className="form-control">
                      <Controller
                        name="examBoard"
                        control={control}
                        render={({ field }) => (
                          <FSelect
                            {...field}
                            label="Name your 10th Board of examination"
                            required
                            placeholder="Select Board"
                            options={EXAM_BOARD_OPTIONS}
                            error={errors.examBoard?.message}
                          />
                        )}
                      />
                      {examBoard === "Other" && (
                        <Controller
                          name="examBoardOther"
                          control={control}
                          render={({ field }) => (
                            <input
                              placeholder="Specify other board"
                              {...field}
                              className="input mt-2 !rounded-md w-full border focus:ring-0 focus:outline-none focus:border-[1.5px] focus:border-green-300 border-zinc-200 bg-white text-green-950 placeholder:text-green-950/50"
                            />
                          )}
                        />
                      )}
                    </div>
                    <Controller
                      name="madrasaEducation"
                      control={control}
                      render={({ field }) => (
                        <FSelect
                          {...field}
                          label="Moral/Madrasa Education"
                          required
                          placeholder="Select Option"
                          options={MADRASA_OPTIONS}
                          error={errors.madrasaEducation?.message}
                        />
                      )}
                    />
                    <Controller
                      name="madrasaBoard"
                      control={control}
                      render={({ field }) => (
                        <FInput
                          {...field}
                          label="Board of Examination (Madrasa)"
                          required
                          error={errors.madrasaBoard?.message}
                        />
                      )}
                    />
                    <div className="form-control">
                      <Controller
                        name="interestedStream"
                        control={control}
                        render={({ field }) => (
                          <FSelect
                            {...field}
                            label="Interested Stream"
                            required
                            placeholder="Select Stream"
                            options={STREAM_OPTIONS}
                            error={errors.interestedStream?.message}
                          />
                        )}
                      />
                    </div>
                  </div>
                </section>
              </motion.div>
            )}

            {activeStep === 2 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Section 5: Achievements & Interests */}
                <section className="mb-8">
                  <SectionTitle title="Achievements & Interests" />
                  <div className="space-y-6">
                    <Controller
                      name="achievements"
                      control={control}
                      render={({ field }) => (
                        <FTextarea
                          {...field}
                          label="What were your major achievements in the past year?"
                          error={errors.achievements?.message}
                        />
                      )}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Controller
                        name="talentsArts"
                        control={control}
                        render={({ field }) => (
                          <FTextarea
                            {...field}
                            label="What are your talents in arts?"
                            height="h-24"
                            error={errors.talentsArts?.message}
                          />
                        )}
                      />
                      <Controller
                        name="talentsSports"
                        control={control}
                        render={({ field }) => (
                          <FTextarea
                            {...field}
                            label="What are your talents in sports?"
                            height="h-24"
                            error={errors.talentsSports?.message}
                          />
                        )}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Controller
                        name="favoriteLeader"
                        control={control}
                        render={({ field }) => (
                          <FInput
                            {...field}
                            label="Who is your favorite leader?"
                            type="text"
                            error={errors.favoriteLeader?.message}
                          />
                        )}
                      />
                      <Controller
                        name="roleModel"
                        control={control}
                        render={({ field }) => (
                          <FInput
                            {...field}
                            label="Who is your role model?"
                            type="text"
                            error={errors.roleModel?.message}
                          />
                        )}
                      />
                    </div>
                    <Controller
                      name="lastReadBook"
                      control={control}
                      render={({ field }) => (
                        <FInput
                          {...field}
                          label="Name of the book you last read?"
                          type="text"
                          error={errors.lastReadBook?.message}
                        />
                      )}
                    />
                    <Controller
                      name="ambition"
                      control={control}
                      render={({ field }) => (
                        <FTextarea
                          {...field}
                          label="What is the ambition in your life?"
                          error={errors.ambition?.message}
                        />
                      )}
                    />
                    <Controller
                      name="muslimPriority"
                      control={control}
                      render={({ field }) => (
                        <FTextarea
                          {...field}
                          label="As a Muslim, what is the most imporatant thing in your life?"
                          error={errors.muslimPriority?.message}
                        />
                      )}
                    />
                    <Controller
                      name="optionalIbadath"
                      control={control}
                      render={({ field }) => (
                        <FTextarea
                          {...field}
                          label="What are the optional Ibadath ( Sunnah) that you perform other than Five time Namaz in a day?"
                          error={errors.optionalIbadath?.message}
                        />
                      )}
                    />
                    <Controller
                      name="technicalSkills"
                      control={control}
                      render={({ field }) => (
                        <FTextarea
                          {...field}
                          label="List some of your technical skills? (Eg: Coding, Photography Etc...)"
                          error={errors.technicalSkills?.message}
                        />
                      )}
                    />
                  </div>
                </section>

                {/* Section 6: Social Media & Other */}
                <section>
                  <SectionTitle title="Social Media & Other" />
                  <div className="space-y-6">
                    <Controller
                      name="socialMedia"
                      control={control}
                      render={({ field }) => (
                        <FTextarea
                          {...field}
                          label="Do you have accounts in Social Media Platform? If yes, which one is your favourite?"
                          error={errors.socialMedia?.message}
                        />
                      )}
                    />
                    <Controller
                      name="youtubeHabits"
                      control={control}
                      render={({ field }) => (
                        <FTextarea
                          {...field}
                          label="Do you have a habit of watching YouTube videos? If yes, Which type of videos you see frequently?"
                          error={errors.youtubeHabits?.message}
                        />
                      )}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Controller
                        name="sourceOfInfo"
                        control={control}
                        render={({ field }) => (
                          <FInput
                            {...field}
                            label="How do you came to know about FACE World Leadership School?"
                            type="text"
                            error={errors.sourceOfInfo?.message}
                          />
                        )}
                      />
                      <div className="form-control">
                        <Controller
                          name="visitedSocials"
                          control={control}
                          render={({ field }) => (
                            <FSelect
                              {...field}
                              label="Have you visited FACE official YouTube and Instagram accounts?"
                              placeholder="Select option"
                              options={VISITED_SOCIALS_OPTIONS}
                              error={errors.visitedSocials?.message}
                            />
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </section>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-8 pt-4 border-t border-green-200/20">
        <button
          type="button"
          onClick={handleBack}
          disabled={activeStep === 0}
          className="btn btn-ghost text-green-950 bg-zinc-100 hover:bg-zinc-200 border-none shadow-none disabled:bg-transparent rounded-lg disabled:text-gray-300"
        >
          <FaChevronLeft className="mr-1" /> Back
        </button>

        {activeStep === steps.length - 1 ? (
          <button
            type="button"
            onClick={handleSubmit(onSubmit)}
            disabled={isSubmitting}
            className="btn bg-green-950 hover:bg-green-200 text-green-50 px-5 rounded-lg border-none shadow-lg shadow-green-950/30 disabled:bg-green-950/50 disabled:text-green-50/50"
          >
            {isSubmitting ? (
              <>
                <span className="loading loading-spinner loading-sm mr-2"></span>
                Submitting...
              </>
            ) : (
              "Submit Application"
            )}
          </button>
        ) : (
          <button
            type="button"
            onClick={handleNext}
            className="btn bg-green-950 hover:bg-green-200 text-green-50 px-5 rounded-lg border-none shadow-lg shadow-green-950/30"
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
}

export default AdmissionForm;

const SuccessGreeting = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-8 md:p-16 relative overflow-hidden rounded-xl border border-green-400/50 max-w-2xl mx-auto my-20 min-h-[600px] flex flex-col items-center justify-center text-center relative overflow-hidden"
    >
      {/* Decorative background elements */}
      {/* <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-green-600 to-green-950" />
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-green-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-green-50 rounded-full blur-3xl opacity-50" /> */}

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.2,
        }}
        className="w-28 h-28 bg-gradient-to-tr from-green-300 to-green-500 rounded-full flex items-center justify-center mb-8 shadow-green-200"
      >
        <FaCheck className="text-5xl text-white" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-4xl font-semibold text-green-950 font-Grotesque-font mb-4"
      >
        Congratulations!
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="space-y-4"
      >
        <p className="text-2xl font-medium text-green-400">
          Your application is on its way.
        </p>
        <p className="text-lg text-green-950/60 max-w-sm mx-auto leading-relaxed">
          Thank you for applying to FACE World Leadership School. We have
          received your details and our team will get in touch with you soon.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="pt-6 z-[2]"
      >
        <button
          onClick={() => (window.location.href = "/")}
          className="btn bg-transparent border border-zinc-200 hover:bg-green-light text-green-950 px-7 py-4 rounded-full text-base font-medium shadow-none transition-all hover:scale-105 active:scale-95"
        >
          Explore More
        </button>
      </motion.div>
      <div className="absolute -top-10 -left-10 w-60 h-80 bg-zinc-300/20 rounded-full blur-2xl"></div>
      <LogoStroke className="text-green-400/50 -z-0 w-[380px] h-auto absolute -bottom-40 -right-[20%] rotate-12" />
    </motion.div>
  );
};

// Helper Components
const FInput = ({ label, error, ...props }: any) => {
  return (
    <div className="form-control">
      <label className="label mb-1 h-auto">
        <p className="label-text font-medium text-green-950 whitespace-normal">
          {label} {props.required && <span className="text-red-500">*</span>}
        </p>
      </label>
      <input
        {...props}
        className="input !rounded-md w-full border focus:ring-0 focus:outline-none focus:border-[1.5px] focus:border-green-300 border-zinc-200 bg-white text-green-950 placeholder:text-green-950/50"
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

const FTextarea = ({ label, error, height = "h-24", ...props }: any) => {
  return (
    <div className="form-control flex flex-col">
      <label className="label mb-1 h-auto">
        <span className="label-text font-medium text-green-950 whitespace-normal">
          {label} {props.required && <span className="text-red-500">*</span>}
        </span>
      </label>
      <textarea
        {...props}
        className={`textarea textarea-bordered border border-zinc-200 w-full ${height} focus:border-green-300 rounded-md focus:ring-0 focus:outline-none focus:border-[1.5px]  bg-white text-green-950 placeholder:text-green-950/50`}
      ></textarea>
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h3 className="text-lg font-semibold rounded-md bg-green-light/50 text-green-950 p-1.5 px-5 mb-6">
      {title}
    </h3>
  );
};

const FSelect = ({ label, error, options, ...props }: any) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="form-control">
      <label className="label mb-1 h-auto">
        <span className="label-text font-medium text-green-950 whitespace-normal">
          {label} {props.required && <span className="text-red-500">*</span>}
        </span>
      </label>
      <div
        className={`w-full border rounded-md bg-white transition-all duration-200 ${
          isFocused
            ? "border-green-300 ring-1 ring-green-300/20"
            : "border-zinc-200"
        }`}
      >
        <Select
          {...props}
          variant="borderless"
          className="w-full text-green-950"
          style={{ height: "40px" }}
          size="large"
          showSearch
          virtual={false}
          filterOption={(input, option) =>
            ((option?.label ?? "") as string)
              .toLowerCase()
              .includes(input.toLowerCase())
          }
          value={props.value || undefined}
          onChange={(val) => props.onChange(val)}
          options={options}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur && props.onBlur(e);
          }}
        />
      </div>

      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};

const FDatePicker = ({ label, error, ...props }: any) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="form-control">
      <label className="label mb-1 h-auto">
        <span className="label-text font-medium text-green-950 whitespace-normal">
          {label} {props.required && <span className="text-red-500">*</span>}
        </span>
      </label>
      <div
        className={`w-full border border-zinc-200 rounded-md bg-white ${
          isFocused
            ? "border-green-300 ring-0 outline-none focus:ring-0 focus:border-green-300"
            : "border-zinc-200"
        }`}
      >
        <DatePicker
          {...props}
          showNow={false}
          size="large"
          className="w-full text-green-950 !border-none !shadow-none"
          style={{ height: "38px" }}
          value={props.value ? dayjs(props.value) : null}
          onChange={(date) => props.onChange(date ? date.toDate() : undefined)}
          format="DD-MM-YYYY"
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur && props.onBlur(e);
          }}
        />
      </div>
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};
