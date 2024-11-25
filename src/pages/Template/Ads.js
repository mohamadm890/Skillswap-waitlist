"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Ads = ({ generatedText, setGeneratedText }) => {
  const [product, setProduct] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [keyFeatures, setKeyFeatures] = useState("");
  const [tone, setTone] = useState("friendly");
  const [customTone, setCustomTone] = useState("");
  const [dialect, setDialect] = useState("modern_standard");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setLoading(true);

    if (!product.trim() || !targetAudience.trim()) {
      setErrorMessage("يرجى إدخال جميع الحقول المطلوبة.");
      setLoading(false);
      return;
    }

    const obj = {
      type: "ad",
      product,
      targetAudience,
      keyFeatures,
      tone: customTone || tone,
    };

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });

      if (!response.ok) {
        throw new Error("فشل في إنشاء النص الإعلاني.");
      }

      const data = await response.json();
      setGeneratedText(data.output);
    } catch (error) {
      setErrorMessage("حدث خطأ أثناء إنشاء النص الإعلاني.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-transparent rounded-lg space-y-4">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Product Name */}
        <div style={{marginTop: "12px"}}>
          <label className="block text-sm font-medium text-gray-700">
            اسم المنتج
          </label>
          <Input
            type="text"
            style={{backgroundColor: 'white'}}
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            placeholder="اكتب اسم المنتج"
            className="mt-1"
          />
        </div>

        {/* Target Audience */}
        <div style={{marginTop: "12px" }} >
          <label className="block text-sm font-medium text-gray-700">
            الجمهور المستهدف
          </label>
          <Input
            type="text"
            value={targetAudience}
            style={{backgroundColor: 'white'}}

            onChange={(e) => setTargetAudience(e.target.value)}
            placeholder="مثال: طلاب، محترفون"
            className="mt-1"
          />
        </div>

        {/* Key Features */}
        <div style={{marginTop: "12px" }}>
          <label className="block text-sm font-medium text-gray-700">
            الميزات أو فوائد المنتج
          </label>
          <Textarea
                      style={{backgroundColor: 'white'}}

            value={keyFeatures}
            onChange={(e) => setKeyFeatures(e.target.value)}
            placeholder="اكتب الميزات الرئيسية للمنتج"
            className="mt-1"
          />
        </div>

        {/* Dialect Selection */}
        <div  style={{marginTop: "12px"}}>
          <label className="block text-sm font-medium text-gray-700  ">
            اللهجة
          </label>
          <Select
            value={dialect}
            onChange={(e) => setDialect(e.target.value)}
            className="mt-1 bg-white"
          >
            <SelectTrigger className="w-[180px] bg-white"    >
              <SelectValue placeholder="اللهجة"
 />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="modern_standard" className="bg-white">العربية الفصحى</SelectItem>
              <SelectItem value="egyptian">اللهجة المصرية</SelectItem>
              <SelectItem value="gulf">اللهجة الخليجية</SelectItem>
              <SelectItem value="moroccan">اللهجة المغربية</SelectItem>
            </SelectContent>
          </Select>
        </div>

       

        {/* Submit Button */}
        <Button type="submit" className="w-full mt-20 " style={{marginTop: "16px", backgroundColor: "green"}} >
          {loading ? "جاري إنشاء النص..." : "إنشاء نص إعلاني"}
        </Button>

        {/* Error Message */}
        {errorMessage && (
          <p className="text-red-500 text-center mt-2">{errorMessage}</p>
        )}
      </form>
    </div>
  );
};

export default Ads;
