import React, { Fragment } from "react";
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram, BsTwitter } from "react-icons/bs";
function Body() {
    return (
        <div className="text-center p-10 mx-auto max-w-5xl">
            <h2 className="text-4xl py-2 text-teal-500 font-medium">
                Ali Pileforooshha
            </h2>
            <h3 className=" text-2xl py-2">Full-Stack Developer</h3>
            <p className="text-center text-lg leading-8 text-gray-800 dark:text-slate-300">
                Hey!, I'm Ali Pileforooshha and I am a seasoned
                Full-Stack Web Developer. Throughout my years of experience, I
                have developed a wide range of websites in various industries,
                and as a result, I have gained extensive expertise in my field.
                My approach to every project is to comprehend the unique
                requirements of each client and recommend the most suitable
                solution for them. I have had the privilege of working on
                diverse projects such as E-commerce websites, Admin dashboards,
                Insurance websites, Cryptocurrency platforms, and more.
            </p>
            <div className="flex justify-center align-center my-10">
                <AiFillLinkedin className=" text-blue-600 text-6xl" />
                <AiOutlineTwitter className=" text-blue-500 text-6xl" />
                <BsInstagram className=" text-red-600 text-6xl" />
                {/* <BsTelegram /> */}
            </div>
        </div>
    );
}

export default Body;
