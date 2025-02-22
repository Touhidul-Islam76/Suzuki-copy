import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import All_Data_Context from "../All_Data/All_Data_Context";

const SingleNews = () => {
    const { id } = useParams(); // Get news ID from URL
    const { top_news } = useContext(All_Data_Context); // Get news data from context

    if (!top_news) {
        return <h1>Loading...</h1>; // If data is not available yet
    }

    // Find the specific news by ID
    const singleNewsItem = top_news.find((item) => item.id === Number(id));

    if (!singleNewsItem) {
        return <h1>News Not Found</h1>;
    }
    console.log(singleNewsItem);
    return (
        <div>
            <div className="single-news flex flex-col items-center justify-center">
                <img src={singleNewsItem.img} alt="News" />
                <p className="font-semibold text-gray-500 text-xl md:text-2xl text-left w-full px-2 md:px-8">{singleNewsItem.date}</p>
                <h1 className="font-extrabold mt-3 text-2xl md:text-4xl text-center mb-6">
                    {singleNewsItem.title}
                </h1>
                <p className="w-[90%]">
                This year we are celebrating our 100th anniversary.



On 15th of March, 1920, Michio Suzuki founded the Suzuki Loom Manufacturing Co. in Hamamatsu.

Since then, we have expanded our business from looms to motorcycles, automobiles, outboard motors, ATV’s and others, always adapting to the trend of the times as well as domestic and global markets.



Your kind support at all times is truly the greatest factor that has enabled us to always be close to our customers’ daily lives and achieve the commemorative 100th anniversary.

All members of Suzuki Motor Corporation take this as an important milestone to reaffirm the founder’s philosophy of “focusing on customers” and strive to deliver products to customers across the globe.



This year also marks the beginning of the next century, and we all are committed to achieve even greater business performance in such important year.



We sincerely appreciated your continuous support.
<br />
<br />




Suzuki Motor Corporation
<br />
Representative Director and Chairman
<br />
Osamu Suzuki
                </p>
            </div>
        </div>
    );
};

export default SingleNews;
