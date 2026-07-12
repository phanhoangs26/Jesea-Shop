"use client";
import Image from "next/image";
import React from "react";
import { JeseaLogo } from "../../images";
import Link from "next/link";
import {
  EnvironmentOutlined,
  FacebookFilled,
  MailFilled,
  PhoneFilled,
} from "@ant-design/icons";

export default function Footer() {
  return (
    <footer className="bg-[#FAF6F1]/90 border-t border-[#E0E0E0] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/*Main Grid*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 lg:gap-12 md:items-start">
          {/*Brand Column*/}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src={JeseaLogo}
                alt="Jesea Logo"
                width={50}
                height={50}
                className="rounded-full object-cover border border-sky-300"
              />
              <span className="text-xl md:text-xl font-semibold tracking-[0.05em] text-slate-800">
                Jesea <span className="font-bold text-sky-500">Handmade</span>
              </span>
            </div>

            <p className="text-[15px] text-slate-500 leading-relaxed font-bold">
              Mang đến những món đồ thủ công độc bản – vỏ sò, gương trang trí,
              mini figure – được làm tay tỉ mỉ để mỗi khách hàng đều tìm thấy
              một dấu ấn rất riêng cho không gian của mình.
            </p>
          </div>

          {/*Liên kết nhanh*/}
          <div className="space-y-4">
            <h4 className="text-lg font-bold uppercase text-slate-800 border-b border-slate-200 pb-2">
              Liên kết nhanh
            </h4>
            <ul className="space-y-2 text-sm font-bold text-slate-500">
              <li>
                <Link
                  href="/"
                  className="hover:text-sky-400 transition-colors duration-300"
                >
                  Trang chủ
                </Link>
              </li>
            </ul>

            <ul className="space-y-2 text-sm font-bold text-slate-500">
              <li>
                <Link
                  href="/products"
                  className="hover:text-sky-400 transition-colors duration-300"
                >
                  Sản phẩm
                </Link>
              </li>
            </ul>

            <ul className="space-y-2 text-sm font-bold text-slate-500">
              <li>
                <Link
                  href="/collections"
                  className="hover:text-sky-400 transition-colors duration-300"
                >
                  Bộ sưu tập
                </Link>
              </li>
            </ul>

            <ul className="space-y-2 text-sm font-bold text-slate-500">
              <li>
                <Link
                  href="/about-us"
                  className="hover:text-sky-400 transition-colors duration-300"
                >
                  Về chúng tôi
                </Link>
              </li>
            </ul>

            <ul className="space-y-2 text-sm font-bold text-slate-500">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-sky-400 transition-colors duration-300"
                >
                  Hỗ trợ
                </Link>
              </li>
            </ul>
          </div>

          {/*Thông tin liên hệ */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold uppercase text-slate-800 border-b border-slate-200 pb-2">
              Thông tin liên hệ
            </h4>

            <ul className="space-y-4 text-sm font-semibold text-slate-700">
              <li className="flex items-center space-x-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition-colors duration-300 hover:border-sky-500 hover:bg-sky-500 hover:text-white">
                  <EnvironmentOutlined className="text-base" />
                </span>
                <span>87 Phó Đức Chính, P1, Bình Thạnh</span>
              </li>
            </ul>

            <ul className="space-y-4 text-sm font-semibold text-slate-700">
              <li className="flex items-center space-x-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition-colors duration-300 hover:border-green-500 hover:bg-green-500 hover:text-white">
                  <PhoneFilled className="text-base" />
                </span>
                <span>0345 785 622</span>
              </li>
            </ul>

            <ul className="space-y-4 text-sm font-semibold text-slate-700">
              <li className="flex items-center space-x-3">
                <Link
                  href="mailto:contact@jesea.vn"
                  className="flex items-center space-x-3"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition-colors duration-300 hover:border-sky-500 hover:bg-sky-500 hover:text-white">
                    <MailFilled className="text-base" />
                  </span>
                  <span>contact@jesea.vn</span>
                </Link>
              </li>
            </ul>

            <ul className="space-y-4 text-sm font-semibold text-slate-700">
              <li className="flex items-center space-x-3">
                <Link
                  href="https://www.facebook.com/truclinh.phamhuynh.16"
                  target="_blank"
                  className="flex items-center space-x-3"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition-colors duration-300 hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white">
                    <FacebookFilled className="text-base" />
                  </span>
                  <span>Phạm Huỳnh Trúc Linh</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/*Bottom bar*/}
        <div className="border-t border-slate-200 pt-6 text-center text-xs font-semibold text-slate-400">
          © 2026 Jesea. Đã đăng ký bản quyền. Thiết kế bởi HoangSon.
        </div>
      </div>
    </footer>
  );
}
