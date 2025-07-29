"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dropzone,
  DropzoneContent,
  DropzoneEmptyState,
} from "@/components/ui/kibo-ui/dropzone";
import { toast } from "sonner";

export default function ProviderApplicationForm() {
  const [files, setFiles] = useState([]);
  const [agreed, setAgreed] = useState(false);

  const handleDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!agreed) {
      toast.error("Please agree to the terms before submitting.");
      return;
    }

    toast.success(
      "Application submitted successfully! We’ll review it shortly."
    );
  };

  return (
    <div className="min-h-screen bg-green-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="mb-6 bg-green-100 border-green-300">
          <CardHeader>
            <CardTitle className="text-2xl text-green-800">
              Become a Verified Solar Service Provider
            </CardTitle>
          </CardHeader>
          <CardContent className="text-green-700">
            Kindly fill in the details below to register your business for
            listing and verification.
          </CardContent>
        </Card>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-green-800">
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  required
                
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  required
                
                />
              </div>
              <div>
                <Label htmlFor="idNumber">National ID Number</Label>
                <Input
                  id="idNumber"
                  name="idNumber"
                  required
           
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="county">County</Label>
                <Input
                  id="county"
                  name="county"
                  required
                
                />
              </div>
            </CardContent>
          </Card>

          {/* Business Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-green-800">
                Business Information
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="businessName">Business Name</Label>
                <Input
                  id="businessName"
                  name="businessName"
                
                />
              </div>
              <div>
                <Label htmlFor="businessType">Business Type</Label>
                <Input
                  id="businessType"
                  name="businessType"
                 
                />
              </div>
              <div>
                <Label htmlFor="kraPin">KRA PIN</Label>
                <Input
                  id="kraPin"
                  name="kraPin"
                  required
                 
                />
              </div>
              <div>
                <Label htmlFor="permitNumber">Business Permit Number</Label>
                <Input
                  id="permitNumber"
                  name="permitNumber"
                  required
                 
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="registrationNumber">
                  Registration/Certificate Number
                </Label>
                <Input
                  id="registrationNumber"
                  name="registrationNumber"
                 
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="experience">Years of Experience</Label>
                <Input
                  id="experience"
                  name="experience"
                  type="number"
                  min="0"
                 
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="bio">Describe Your Services / Projects</Label>
                <Textarea
                  id="bio"
                  name="bio"
                  rows="4"
                
                />
              </div>
            </CardContent>
          </Card>

          {/* Upload Documents */}
          <Card>
            <CardHeader>
              <CardTitle className="text-green-800">Upload Documents</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Label>
                Upload Scans (PDF/Images) of: ID, KRA PIN, Business Permit,
                Certificates
              </Label>
              <Dropzone
                maxSize={1024 * 1024 * 10}
                minSize={1024}
                onDrop={handleDrop}
                onError={console.error}
                src={files}
              >
                <DropzoneEmptyState />
                <DropzoneContent />
              </Dropzone>
            </CardContent>
          </Card>

          {/* Agreement */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="agree"
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(Boolean(checked))}
              className="border-green-500 data-[state=checked]:bg-green-600"
            />
            <Label htmlFor="agree" className="text-sm">
              I agree to the{" "}
              <span className="underline text-green-600 cursor-pointer">
                terms and conditions
              </span>
              .
            </Label>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={!agreed}
            className={`w-full md:w-auto bg-green-600 hover:bg-green-700 text-white ${
              !agreed ? "opacity-70" : ""
            }`}
          >
            Submit Application
          </Button>
        </form>
      </div>
    </div>
  );
}
