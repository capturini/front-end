"use client";
import SettingsContent from "@/data/dashboard/settings.content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Settings = () => {
  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
      <div className="flex flex-col gap-6 w-full md:w-[500px] mx-2 px-5 py-5 bg-white rounded-md">
        <SettingsContent />
      </div>
    </div>
  );
};

export default Settings;
