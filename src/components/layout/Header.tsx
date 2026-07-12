"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Drawer } from "antd";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
  CloseOutlined,
  PhoneFilled,
  FacebookFilled,
} from "@ant-design/icons";
import { JeseaLogo } from "../../images";

const menuItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Sản phẩm", href: "/products" },
  { label: "Bộ sưu tập", href: "/collections" },
  { label: "Giới thiệu", href: "/about" },
  { label: "Liên hệ", href: "/contact" },
];

// TODO: thay bằng số hotline thật của bạn
const HOTLINE = "0345 785 622";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 bg-[#FAF6F1]/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile hamburger menu trigger */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-slate-800 hover:text-sky-500 p-2 focus:outline-none transition-colors cursor-pointer"
              aria-label="Mở menu"
            >
              <MenuOutlined className="text-xl" />
            </button>
          </div>

          {/* Logo - canh giữa trên mobile, canh trái trên desktop */}
          <div className="flex-1 lg:flex-initial flex justify-center lg:justify-start">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={JeseaLogo}
                alt="Jesea Logo"
                width={44}
                height={44}
                priority
                className="rounded-full object-cover border border-sky-300"
              />
              <span className="text-lg md:text-xl font-bold tracking-[0.05em] text-slate-800">
                Jesea <span className="font-medium text-sky-500">Handmade</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-xs tracking-[0.2em] font-semibold uppercase transition-colors duration-300 pb-1 ${
                    isActive
                      ? "text-sky-500"
                      : "text-slate-800 hover:text-sky-500"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-sky-500" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="text-slate-800 hover:text-sky-500 p-2 transition-colors focus:outline-none cursor-pointer"
              aria-label="Tìm kiếm"
            >
              <SearchOutlined className="text-lg md:text-xl" />
            </button>

            {/* Cart Icon */}
            <Link
              href="/cart"
              className="text-slate-800 hover:text-sky-500 p-2 transition-colors relative"
              aria-label="Giỏ hàng"
            >
              <ShoppingCartOutlined className="text-xl md:text-2xl" />
            </Link>
          </div>
        </div>

        {/* Expandable Search Input (Desktop/Mobile) */}
        {showSearch && (
          <div className="py-5 border-t border-slate-200 animate-fade-in bg-transparent">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (searchQuery.trim()) {
                  router.push(
                    `/search?q=${encodeURIComponent(searchQuery.trim())}`,
                  );
                }
                setShowSearch(false);
              }}
              className="max-w-xl mx-auto flex items-center gap-4"
            >
              <div className="relative flex-1">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm kiếm sản phẩm..."
                  className="w-full bg-transparent border-b border-sky-300 focus:border-sky-500 py-2 text-slate-800 font-semibold placeholder:italic placeholder:text-slate-500 focus:outline-none transition-colors duration-300 text-base md:text-lg pr-10"
                  autoFocus
                />
                <button
                  type="submit"
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-500 hover:text-sky-500 p-1.5 transition-colors focus:outline-none cursor-pointer"
                  aria-label="Tìm kiếm"
                >
                  <SearchOutlined className="text-lg md:text-xl" />
                </button>
              </div>
              <button
                type="button"
                onClick={() => {
                  setShowSearch(false);
                  setSearchQuery("");
                }}
                className="text-slate-500 hover:text-red-500 p-2 transition-colors focus:outline-none flex items-center justify-center rounded-full hover:bg-slate-800/5 cursor-pointer"
                aria-label="Đóng tìm kiếm"
              >
                <CloseOutlined className="text-base" />
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Mobile Menu Drawer */}
      <Drawer
        title="JESEA HANDMADE"
        placement="left"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        closeIcon={<CloseOutlined className="text-slate-500" />}
        styles={{
          wrapper: { width: 280 },
          body: { backgroundColor: "#FAF6F1", padding: "2rem 1.5rem" },
          header: {
            backgroundColor: "#FAF6F1",
            borderBottom: "1px solid rgb(226 232 240)",
          },
        }}
      >
        <div className="flex flex-col space-y-6">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm tracking-[0.25em] uppercase font-semibold pb-2 border-b !border-slate-200 transition-colors ${
                  isActive
                    ? "!text-sky-500 !font-medium"
                    : "!text-slate-800 hover:!text-sky-500"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <div className="pt-8 text-center text-xs font-semibold tracking-widest">
            <PhoneFilled className="mr-2 text-red-500" />
            <span className="text-slate-600">{HOTLINE}</span>
          </div>
        </div>
      </Drawer>
    </header>
  );
}
