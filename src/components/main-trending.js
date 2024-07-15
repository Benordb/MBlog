"use client"
import { useEffect, useState } from "react";
import { MainContainer } from "./main-container"
import { TrendingCard } from "./trending-card"
import Link from "next/link";

export const MainTrending = () => {
    const [trends, setTrends] = useState([]);
    const arr = [];
    trends.map((item) => {
        arr.push([item, item.public_reactions_count])
    })
    arr.sort((a, b) => a[1] - b[1])
    const trendingElement = arr.slice(-5)
    const getData = async () => {
        try {
            const res = await fetch(`https://dev.to/api/articles`)
            const data = await res.json();
            await setTrends(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <MainContainer>
            <div className="my-24">
            <h1 className="text-black font-bold text-xl mb-6">Trending</h1>
            <div className="overflow-x-auto">
                <div className="flex w-fit gap-[43px]">
                    {
                        trendingElement.map((item, index) => (
                            <Link key={index} href={`/blog/${item[0].id}`}>
                                <TrendingCard zur={item[0].social_image} status={item[0].type_of} title={item[0].title} />
                            </Link>
                        ))
                    }
                </div>
            </div>
            </div>
        </MainContainer>
    )
}