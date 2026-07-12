import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Manrope } from "next/font/google";
import AntdThemeProvide from "@/components/providers/AntdThemeProvider";
import ProgressProvider from "@/components/providers/ProgressProvider";
import "./global.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Jesea Shop | Cửa Hàng Đồ Hand Made",
  description: "Hand Made Shop",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body
        className={`${manrope.className} antialiased bg-slate-50 text-slate-800`}
      >
        <AntdRegistry>
          <AntdThemeProvide>
            <ProgressProvider>{children}</ProgressProvider>
          </AntdThemeProvide>
        </AntdRegistry>
      </body>
    </html>
  );
}
