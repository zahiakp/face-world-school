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
                            options={[
                              { value: "Male", label: "Male" },
                              { value: "Female", label: "Female" },
                            ]}
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
                            label="Name of Examination and Board"
                            required
                            placeholder="Select Board"
                            options={[
                              { value: "CBSE", label: "CBSE" },
                              { value: "SSLC", label: "SSLC" },
                              { value: "ICSE", label: "ICSE" },
                              { value: "Other", label: "Other" },
                            ]}
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
                        <FInput
                          {...field}
                          label="Madrasa Education"
                          required
                          placeholder="e.g., 5th Standard, Completed"
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
                            options={[
                              { value: "Humanities", label: "Humanities" },
                              { value: "Science", label: "Science" },
                            ]}
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
                              options={[
                                { value: "Yes", label: "Yes" },
                                { value: "No", label: "No" },
                              ]}
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
      <Select
        {...props}
        variant="outlined"
        className={`w-full border border-zinc-200 rounded-md bg-white text-green-950 ${
          isFocused
            ? "border-green-300 ring-0 outline-none focus:ring-0 focus:border-green-300"
            : "border-zinc-200"
        }`}
        style={{ height: "40px", paddingTop: "4px" }}
        size="large"
        showSearch
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
