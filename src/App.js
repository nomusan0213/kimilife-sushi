"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "./components/ui/button.js";
import { Card, CardContent } from "./components/ui/card.js";
import { Sheet, SheetContent, SheetTrigger } from "./components/ui/sheet";
import { Menu, X } from "lucide-react";

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      name: "にぎり",
      description: "新鮮な旬の魚を使った握り寿司",
      image: "/images/1.png?height=400&width=600",
    },
    {
      name: "刺身",
      description: "厳選された魚介類の刺身盛り合わせ",
      image: "/images/2.png?height=400&width=600",
    },
    {
      name: "巻物",
      description: "伝統的な巻き寿司から創作巻物まで",
      image: "/images/3.png?height=400&width=600",
    },
    {
      name: "一品料理",
      description: "季節の食材を使った創作料理",
      image: "/images/nigiri.jpg?height=400&width=600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヒーローセクション */}
      <section className="relative h-screen w-screen">
        {/* ヘッダー */}
        <header className="absolute inset-0 flex items-start justify-between bg-transparent py-4 text-white px-10">
          <div className="text-3xl font-bold flex-shrink-0">和招縁</div>
          {/* 右側：ナビゲーション */}
          <nav className="flex items-center space-x-6">
            <a href="/" className="text-lg font-bold hover:!text-gray-300">
              ホーム
            </a>
            <a href="/" className="text-lg font-bold hover:!text-gray-300">
              メニュー
            </a>
            <a href="/" className="text-lg font-bold hover:!text-gray-300">
              予約
            </a>
            <a href="/" className="text-lg font-bold hover:!text-gray-300">
              アクセス
            </a>
          </nav>
        </header>
        <div className="haikei h-full w-full">
          <img
            src="/images/nigiri.jpg"
            alt="高級寿司の盛り合わせ"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4">和招縁</h1>
              <p className="text-xl md:text-2xl mb-8">
                最高級の江戸前鮨をご堪能ください
              </p>
              <Button className="bg-white text-gray-800 hover:bg-gray-100 text-lg px-8 py-3">
                ご予約はこちら
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 店舗情報 */}
      <section className="h-[25vh] w-screen flex items-center justify-center bg-white">
        <div>
          <p className="text-4xl font-bold text-center mb-8">
            「和んだり、和らいだり、縁や福を招く場所に。」
          </p>
          <p className="text-2xl font-bold text-center mb-8">
            そんな想いを込めて、「和招縁」と名付けました。
          </p>
          <p className="text-2xl font-bold text-center mb-8">
            皆様に心地よいひとときをお届けします。
          </p>
        </div>
      </section>

      {/* お知らせセクション */}
      <section className="py-16 bg-white relative h-screen w-screen">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">お知らせ</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      2024年新年会プラン
                    </h3>
                    <p className="text-gray-600 mb-4">
                      新年を彩る特別なコースをご用意いたしました。
                    </p>
                    {/* <Link href="#" className="text-blue-600 hover:underline">詳細を見る</Link> */}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* メニューのハイライト */}
      <section className="py-16 bg-gray-100 relative h-screen w-screen">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            メニューのハイライト
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
              >
                <img
                  src={item.image} // 配列内の画像パスを使用
                  alt={item.name} // 配列内の名前をalt属性に設定
                  width={300}
                  height={200}
                  className="w-full md:w-1/2 h-48 md:h-auto object-cover"
                />

                <div className="p-6 md:w-1/2">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ギャラリーセクション */}
      <section className="py-16 bg-white relative h-screen w-screen">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">ギャラリー</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative aspect-square overflow-hidden rounded-lg"
              >
                <img
                  src="/images/tennai.jpg"
                  alt="店舗風景"
                  className="h-[400px] w-[400px] object-cover"
                />

                {/* <Image
                  src={`/placeholder.svg?height=400&width=400&text=Gallery+Image+${i}`}
                  alt={`ギャラリー画像 ${i}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                /> */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 店舗情報 */}
      <section className="py-16 bg-gray-100 relative h-[75vh] w-screen">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">店舗情報</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {/* <Image
                  src="/placeholder.svg?height=400&width=600&text=Store+Front"
                  alt="店舗外観"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                /> */}
              </motion.div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-4">和招縁</h3>
                <p className="mb-2 text-lg">〒104-0061 東京都中央区銀座X-X-X</p>
                <p className="mb-2 text-lg">電話: 03-XXXX-XXXX</p>
                <p className="mb-4 text-lg">
                  営業時間: 11:30〜14:00 / 17:00〜23:00
                </p>
                <Button className="bg-gray-800 text-white hover:bg-gray-700 text-lg px-6 py-3">
                  Googleマップで見る
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-800 text-white py-12 relative h-[25vh] w-screen">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-2xl font-semibold mb-4">和招縁</h3>
              <p className="text-gray-300">
                最高級の江戸前鮨を提供する銀座の寿司店
              </p>
            </div>
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">リンク</h3>
              {/* <ul className="space-y-2">
                <li><Link href="#" className="text-gray-300 hover:text-white">ホーム</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white">メニュー</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white">予約</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-white">アクセス</Link></li>
              </ul> */}
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-semibold mb-4">お問い合わせ</h3>
              <p className="text-gray-300 mb-2">電話: 03-XXXX-XXXX</p>
              <p className="text-gray-300">メール: info@ginza-sushikou.com</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-400">
              &copy; 2024 銀座 鮨幸 All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
