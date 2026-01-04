"use client";

import React, { useEffect, useState, useCallback } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";
import { fetchAdmissionsPage } from "./Func";
import { toast } from "sonner";
import { Info, User, Phone, GraduationCap, Clock } from "lucide-react";
import { getRelativeTime, formatDate } from "@/lib/dateUtils";
import { FilterSelect } from "@/components/common/FilterSelect";
import LDRloader from "@/components/common/LDRloader";
import { LuArrowUpRight } from "react-icons/lu";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  MapPin,
  Mail,
  Briefcase,
  BookOpen,
  Heart,
  Globe,
  MessageSquare,
} from "lucide-react";

function Content() {
  const [admissions, setAdmissions] = useState<any[]>([]);
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [rows, setRows] = useState<number>(10);
  const [inputValue, setInputValue] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [streamFilter, setStreamFilter] = useState<string | null>(null);
  const [genderFilter, setGenderFilter] = useState<string | null>(null);
  const [selectedApplicant, setSelectedApplicant] = useState<any | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const streamOptions = [
    { label: "Humanities", value: "Humanities" },
    { label: "Computer Science", value: "Computer Science" },
  ];

  const genderOptions = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ];

  const handleStreamChange = (newValue: string) => {
    setStreamFilter(newValue);
    setPage(1);
  };

  const handleGenderChange = (newValue: string) => {
    setGenderFilter(newValue);
    setPage(1);
  };

  const fetchAdmissions = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetchAdmissionsPage({
        page,
        limit: rows,
        search: searchQuery,
        stream: streamFilter || undefined,
        gender: genderFilter || undefined,
      });

      if (response.success && response.data) {
        setAdmissions(response.data);
        setTotalRecords(response.total || 0);
      } else {
        setAdmissions([]);
        setTotalRecords(0);
        toast.error(response.error || "Failed to fetch admissions");
      }
    } catch (err: any) {
      console.error("Error fetching admissions:", err);
      toast.error("Failed to fetch programs. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, [page, rows, searchQuery, streamFilter, genderFilter]);

  useEffect(() => {
    fetchAdmissions();
  }, [fetchAdmissions]);

  const onPageChange = (e: PaginatorPageChangeEvent) => {
    setPage(e.page + 1);
    setRows(e.rows);
  };

  const handleSearch = () => {
    setSearchQuery(inputValue);
    setPage(1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const renderEmpty = (message: string) => (
    <div className="flex gap-5 w-full bg-zinc-50 rounded-xl min-h-60 border border-zinc-200 items-center justify-center flex-col p-10">
      <div className="p-5 rounded-full bg-zinc-100 text-zinc-400">
        <Info size={40} />
      </div>
      <p className="text-zinc-600 font-medium">{message}</p>
    </div>
  );

  const renderContent = () => {
    if (loading) return <LDRloader />;
    if (admissions.length === 0)
      return renderEmpty("No admission applications found");

    return (
      <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-zinc-100 flex justify-between items-center bg-zinc-50/50">
          <h3 className="text-zinc-900 font-semibold text-lg">
            <span className="text-green-200">{totalRecords}</span> Applications
          </h3>
          <div className="text-sm text-zinc-500 font-medium">
            Showing {(page - 1) * rows + 1}-
            {Math.min(page * rows, totalRecords)} of {totalRecords}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-zinc-100">
            <thead className="bg-white">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                  Student Details
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                  Academic Info
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                  Applied On
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider text-right">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-zinc-50 text-zinc-900">
              {admissions.map((item: any) => (
                <tr
                  key={item.id}
                  className="hover:bg-zinc-50/80 transition-colors group"
                >
                  <td className="px-6 py-5 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-green-200/10 flex items-center justify-center text-green mr-4">
                        <User size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-zinc-900 leading-tight">
                          {item.name}
                        </p>
                        <p className="text-xs text-zinc-500 mt-1">
                          {item.gender} • {formatDate(item.dob)}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center text-sm">
                      <GraduationCap size={16} className="text-zinc-400 mr-2" />
                      <div>
                        <p className="font-medium text-zinc-800">
                          {item.interestedStream}
                        </p>
                        <p className="text-xs text-zinc-500 line-clamp-1">
                          {item.school}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center text-sm">
                      <Phone size={14} className="text-zinc-400 mr-2" />
                      <p className="text-zinc-700">{item.contactNumber}</p>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm">
                    <div className="flex items-center text-zinc-500">
                      <Clock size={14} className="mr-2" />
                      {getRelativeTime(item.createdAt)}
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button
                      onClick={() => {
                        setSelectedApplicant(item);
                        setIsSheetOpen(true);
                      }}
                      className="text-green-200 p-2 px-4 flex items-center gap-1 rounded-full border border-zinc-200 hover:text-green-300 hover:border-green-200 text-sm font-semibold transition-colors"
                    >
                      Details <LuArrowUpRight />

                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 border-t border-zinc-100 bg-zinc-50/50">
          <Paginator
            first={(page - 1) * rows}
            rows={rows}
            totalRecords={totalRecords}
            rowsPerPageOptions={[10, 15, 20]}
            onPageChange={onPageChange}
            className="custom-paginator !bg-transparent !border-0 !p-0"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-xl border border-zinc-200">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <div className="md:col-span-2 relative flex items-center">
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full pl-11 pr-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-lg outline-none focus:border-green focus:ring-4 focus:ring-green/5 transition-all text-zinc-900"
              type="search"
              placeholder="Search by name, phone or school..."
            />
            <IoSearchOutline className="absolute left-4 text-xl text-zinc-400" />
            <button
              onClick={handleSearch}
              className="absolute right-2 bg-green-200 text-white px-3 py-1.5 rounded-md text-sm font-semibold hover:bg-green-200 transition-colors"
            >
              Search
            </button>
          </div>

          <FilterSelect
            placeHolder="Filter by Stream..."
            options={streamOptions}
            value={streamFilter}
            onchange={handleStreamChange}
          />

          <FilterSelect
            placeHolder="Filter by Gender..."
            options={genderOptions}
            value={genderFilter}
            onchange={handleGenderChange}
          />

          <button className="flex items-center justify-center gap-2 bg-green-200 text-white hover:bg-green-300 font-semibold py-2.5 px-4 rounded-lg transition-all">
            Export Excel
          </button>
        </div>
      </div>

      <div className="w-full">{renderContent()}</div>

      {/* <style jsx global>{`
        .custom-paginator .p-paginator-page.p-highlight {
          background: #155647 !important;
          color: white !important;
        }
        .custom-paginator .p-paginator-page:hover {
          background: #f4f4f5 !important;
        }
      `}</style> */}
      {/* Admission Details Side Panel */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent className="sm:max-w-[500px] overflow-y-auto bg-white p-0 border-l border-zinc-200">
          {selectedApplicant && (
            <div className="flex flex-col h-full bg-zinc-50/30">
              {/* Header section with cleaner design */}
              <div className="bg-green p-10 text-white relative overflow-hidden shrink-0">
                <div className="relative z-10 flex items-center gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shadow-xl">
                    <User size={40} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight">
                      {selectedApplicant.name}
                    </h2>
                    <p className="text-white/60 font-mono text-sm mt-1">
                      #{selectedApplicant.id.slice(-8).toUpperCase()}
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
              </div>

              <div className="p-10 space-y-6">
                {/* 1. Basic & Contact Info */}
                <div className="bg-white rounded-xl border border-zinc-200 p-5 ">
                  <h3 className="text-xs font-bold text-green uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-1 h-3 bg-green rounded-full"></span>
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-2 gap-y-5 gap-x-8">
                    <DetailItem
                      label="Date of Birth"
                      value={formatDate(selectedApplicant.dob)}
                    />
                    <DetailItem
                      label="Gender"
                      value={selectedApplicant.gender}
                    />
                    <DetailItem label="Place" value={selectedApplicant.place} />
                    <DetailItem
                      label="Contact"
                      value={selectedApplicant.contactNumber}
                    />
                    <DetailItem
                      label="WhatsApp"
                      value={selectedApplicant.whatsappNumber}
                    />
                    <div className="col-span-2">
                      <DetailItem
                        label="Communication Address"
                        value={selectedApplicant.address}
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Academic Background */}
                <div className="bg-white rounded-xl border border-zinc-200 p-5 ">
                  <h3 className="text-xs font-bold text-green uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-1 h-3 bg-green rounded-full"></span>
                    Academic Details
                  </h3>
                  <div className="space-y-5">
                    <div className="bg-green/5 p-4 rounded-xl border border-green/10">
                      <DetailItem
                        label="Interested Stream"
                        value={selectedApplicant.interestedStream}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-y-5 gap-x-8">
                      <div className="col-span-2">
                        <DetailItem
                          label="School"
                          value={selectedApplicant.school}
                        />
                      </div>
                      <DetailItem
                        label="Board"
                        value={
                          selectedApplicant.examBoard +
                          (selectedApplicant.examBoardOther
                            ? ` (${selectedApplicant.examBoardOther})`
                            : "")
                        }
                      />
                      <DetailItem
                        label="Madrasa Education"
                        value={selectedApplicant.madrasaEducation}
                      />
                      <div className="col-span-2">
                        <DetailItem
                          label="Madrasa Board"
                          value={selectedApplicant.madrasaBoard}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Family & Background */}
                <div className="bg-white rounded-xl border border-zinc-200 p-5 ">
                  <h3 className="text-xs font-bold text-green uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-1 h-3 bg-green rounded-full"></span>
                    Family & Insights
                  </h3>
                  <div className="grid grid-cols-2 gap-y-5 gap-x-8">
                    <DetailItem
                      label="Father's Name"
                      value={selectedApplicant.fathersName}
                    />
                    <DetailItem
                      label="Occupation"
                      value={selectedApplicant.fathersOccupation}
                    />
                    <DetailItem
                      label="Mother's Name"
                      value={selectedApplicant.mothersName}
                    />
                    <DetailItem
                      label="Occupation"
                      value={selectedApplicant.mothersOccupation}
                    />

                    {selectedApplicant.achievements && (
                      <div className="col-span-2 mt-2 pt-4 border-t border-zinc-100 space-y-4">
                        <DetailItem
                          label="Achievements"
                          value={selectedApplicant.achievements}
                        />
                        <DetailItem
                          label="Ambition"
                          value={selectedApplicant.ambition}
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* 4. Social & Others */}
                <div className="bg-white rounded-xl border border-zinc-200 p-5 ">
                  <h3 className="text-xs font-bold text-green uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-1 h-3 bg-green rounded-full"></span>
                    Other Information
                  </h3>
                  <div className="grid grid-cols-2 gap-y-5 gap-x-8">
                    <DetailItem
                      label="Role Model"
                      value={selectedApplicant.roleModel}
                    />
                    <DetailItem
                      label="Source of Info"
                      value={selectedApplicant.sourceOfInfo}
                    />
                    <div className="col-span-2">
                      <DetailItem
                        label="Favorite Leader"
                        value={selectedApplicant.favoriteLeader}
                      />
                    </div>
                    <div className="col-span-2">
                      <DetailItem
                        label="Visited Socials"
                        value={selectedApplicant.visitedSocials}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}

const DetailItem = ({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}) => (
  <div className={className}>
    <p className="text-[10px] uppercase font-bold text-zinc-400 mb-0.5 tracking-widest">
      {label}
    </p>
    <p className="text-sm text-zinc-800 font-medium leading-relaxed whitespace-pre-wrap">
      {value || "---"}
    </p>
  </div>
);

export default Content;
