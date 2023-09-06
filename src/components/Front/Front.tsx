import React from "react";
import Image from "next/image";

// images imports
import appleIcon from '../../../public/applepng.png';
import star from '../../../public/star.png';
    // emojis
import angry from '../../../public/emojis/1f620.png'
import no1 from '../../../public/others icons/no1.png';
import no2 from '../../../public/others icons/no2.png';
import no3 from '../../../public/others icons/no3.png';
import purplespirit from '../../../public/cartoons/spiritpurple.png';
import smiley from '../../../public/smily.jpg'
    // div1 images
import phone from '../../../public/div1/phone-removebg-preview.png';
import redish from '../../../public/div1/redishangry-removebg-preview.png';
import purplish from '../../../public/div1/purplesmiling-removebg-preview.png';
import bluish from '../../../public/div1/bluishcrying-removebg-preview.png';
    // div4 images
import flower from '../../../public/div4/flower.png';
import profile from '../../../public/div4/profile.png';
import leaf from '../../../public/div4/leaf.png';




export default function Front(){

    return (
        <main>
            <section>

                {/* first section */}
                <div className="px-8 ">
                    <div className="relative flex justify-between bg-regal-blue py-24 rounded-3xl px-16 overflow-hidden">
                        <div className="absolute h-9 w-9 bg-red-500 rounded-full z-10 -bottom-5 left-44"></div>
                        <div className="absolute h-9 w-9 bg-red-300 rounded-full z-10 -left-3 bottom-24"></div>
                        <div className="absolute h-8 w-8 bg-red-300 rounded-full z-10 right-48 -top-2"></div>
                        <div className="absolute h-5 w-5 bg-red-300 rounded-full z-10 left-1/3 top-20"></div>
                        <div className="absolute h-6 w-6 bg-orange-300 rounded-full flex justify-center items-center left-1/4 top-28">
                            <div className="h-3 w-3 bg-orange-600 rounded-full"></div>
                        </div>
                        <div className="absolute h-7 w-14 bg-green-400 rounded-t-full left-1/4 top-16 rotate-45"></div>
                        <div className="absolute h-8 w-16 bg-green-500 rounded-t-full left-24 -top-3 -rotate-45"></div>

                        <div className="flex flex-col z-20">
                            <p className='font-semibold mb-4 z-20'>Ahead app</p>
                            <p className=" text-7xl font-bold">
                                Master your life <br />
                                by mastering <br />
                                emotions
                            </p>

                            <div className="flex self-start  mt-10 gap-4 items-center">
                                <div className="bg-black py-1 px-2 flex items-center gap-1 self-start rounded-md">
                                    <Image src={appleIcon} alt="appleicon" className="w-10 h-10"/>
                                    <div>
                                        <p className="text-white text-xs leading-3">Download on the</p>
                                        <p className="text-white text-xl font-semibold">App Store</p>
                                    </div>
                                </div>
                            
                                <div className="">
                                    <div className="flex gap-2 mb-1">
                                        <Image src={star} alt="star" className="w-4 h-4"/>
                                        <Image src={star} alt="star" className="w-4 h-4"/>
                                        <Image src={star} alt="star" className="w-4 h-4"/>
                                        <Image src={star} alt="star" className="w-4 h-4"/>
                                        <Image src={star} alt="star" className="w-4 h-4"/>
                                    </div>

                                    <p className="text-xs font-medium">100+ AppStore reviews</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-8 right-24 p-24 bg-slate-200 rounded-full border-4 divide-x-2 divide-y-2 border-dashed border-white">
                            <div className="h-72 w-72 bg-purple opacity-20 rounded-full">
                            </div>
                            {/* <div className="relative bottom-48 w-full h-full bg-red-600"> */}
                            <Image src={phone} alt="phone" className="absolute top-10 right-32 w-4/6"/>
                            {/* </div> */}
                            <Image src={redish} alt="redish" className="absolute -right-6 top-36 rotate-12"/>
                            <Image src={purplish} alt="redish" className="absolute left-6 botton-20 rotate-12 w-24 h-24"/>
                            <Image src={bluish} alt="redish" className="absolute left-6 top-12 -rotate-12 w-14 h-16"/>
                            <div className="bg-red-500 h-6 w-6 rounded-full absolute right-10 border-0"></div>
                            <div className="bg-blue-300 h-6 w-6 rounded-full absolute right-48 -top-3"></div>
                            <div className="bg-blue-600 h-6 w-6 rounded-full absolute -left-3 top-52"></div>
                        </div>
                    </div>
                </div>

                {/* second div */}
                <div className="flex mt-20 px-20 py-10 justify-center gap-5">
                    <div className="basis-5/12">
                        <p className="text-3xl font-bold">EQ beats IQ</p>
                    </div>
                    <div className="basis-6/12">
                        <p className="text-2xl">
                            People with high emotional
                            intelligence (EQ) live more fulfilled
                            lives. They tend to be happier and
                            have healthier relationships. 
                        </p>
                    </div>
                    <div className="basis-6/12">
                        <p className="text-2xl">
                            They are more successfull in their
                            pursuits and make for inspiring
                            leaders. According to science, they
                            earn $29k a year.
                        </p>
                    </div>
                </div>

                {/* third div */}
                <div className="mt-8">
                    <div className="px-16">
                        <p className="text-4xl font-bold">Does this sound familiar...</p>
                    </div>

                    <div className="flex gap-10 py-12 px-10 overflow-x-scroll items-center no-scrollbar">
                        <div className="py-7 px-6 bg-greenish rounded-2xl w-1/4 flex-none">
                            <Image src={angry} alt="angry emoji" className="w-9 h-9 mb-4"/>
                            <p className="font-semibold mb-2">You hit dead end in a negotiation</p>
                            <p className="font-xs">You get nervous, frazzled, and frustrated, instead of staying optimistic and solution-oriented to nrgotiate better and with confidence.</p>
                        </div>

                        <div className="py-7 px-6 bg-gray rounded-2xl w-1/4 flex-none">
                            <Image src={angry} alt="angry emoji" className="w-9 h-9 mb-4"/>
                            <p className="font-semibold mb-2">You argue with a colleague</p>
                            <p className="font-xs">You get angry and defensive, instead of staying open and working towards common ground.</p>
                        </div>

                        <div className="py-7 px-6 bg-purple rounded-2xl w-1/4 flex-none -rotate-6 z-10">
                            <Image src={angry} alt="angry emoji" className="w-9 h-9 mb-4"/>
                            <p className="font-semibold mb-2 text-white">You got a promotion at work</p>
                            <p className="font-xs text-white">You question yourself and wonder when they'll realize you're an unqualified imposter, instead of trusting yourself & your abilities.</p>
                        </div>

                        <div className="py-7 px-6 bg-orangish rounded-2xl w-1/4 flex-none">
                            <Image src={angry} alt="angry emoji" className="w-9 h-9 mb-4"/>
                            <p className="font-semibold mb-2">You attend a class reunion</p>
                            <p className="font-xs">You compare yourself with your peer's achievements, instead of making your self-judgement more independent of others.</p>
                        </div>

                        <div className="py-7 px-6 bg-light-orangish rounded-2xl w-1/4 flex-none">
                            <Image src={angry} alt="angry emoji" className="w-9 h-9 mb-4"/>
                            <p className="font-semibold mb-2">You are at lively dinner party</p>
                            <p className="font-xs">You plan on your phone, instead of confidently approaching strangers and striking up a chat.</p>
                        </div>

                        <div className="py-7 px-6 bg-greenish rounded-2xl w-1/4 flex-none">
                            <Image src={angry} alt="angry emoji" className="w-9 h-9 mb-4"/>
                            <p className="font-semibold mb-2">You hit dead end in a negotiation</p>
                            <p className="font-xs">You get nervous, frazzled, and frustrated, instead of staying optimistic and solution-oriented.</p>
                        </div>

                    </div>
                </div>

                {/* fourth div */}
                <div className="mt-10 px-16">
                    <div className="relative bg-light-pinkish py-20 pr-20 pl-11 rounded-3xl">
                        <p className="font-medium">Built out of frustration</p>
                        <p className="text-6xl mt-7 font-bold">Meet the ahead app</p>
                        <div className="absolute  overflow-hidden left-0 bottom-5">
                            <div className="relative right-20">
                                <div className="bg-orange-100 h-64 w-64 rounded-full "></div>
                            </div>
                        </div>
                        <div className="absolute bg-red-200 p-3 flex justify-center items-center left-96 bottom-32 rounded-full">
                            <div className="bg-red-500 h-3 w-3 rounded-full "></div>
                        </div>
                        <div className="absolute rounded-full h-6 w-6 bg-pink-300 left-1/3 bottom-56"></div>
                        <div className="absolute right-24 -top-7">
                            <Image src={flower} alt="leaf" className=""/>
                        </div>
                        <Image src={leaf} alt="leaf" className="absolute right-32 top-28 -rotate-45"/>
                        <Image src={profile} alt="leaf" className="absolute bottom-24 left-28 w-44"/>


                        <div className="flex mt-20">
                            <div className="basis-3/5"></div>

                            <div className="basis-4/12 justify-self-end">
                                <p className="text-lg">
                                    A personalised pocket coach that provides bite-sized, science-driven tools to boost emotional intelligence.
                                </p>
                                <p className="text-lg mt-6">
                                    Think of it as a pocket cheerleader towards a better, more fulfilling.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* fifth div */}
                <div className="relative mt-28 px-28 flex flex-col items-center">
                    <Image src={bluish} alt="bluish " className="absolute left-1/2 top-5 w-16 rotate-12"/>
                    <p className="font-semibold text-lg pb-3 self-start">Wrong with self-improvement & how we're fixing it.</p>
                    <p className="text-5xl font-bold self-start">Self-improvement. Ugh.</p>

                    <div className="flex h-33 mt-20 self-start pl-48 w-full overflow-y-auto no-scrollbar">
                        <div className="w-1 h-60 bg-purple"></div>
                        <div className="w-9/12 flex flex-col gap-12 -ml-2">
                            <div className="relative flex gap-5 items-center w-full">
                                <div className="h-3 w-3 rounded-full bg-purple self-start"></div>
                                <div className="-mt-1 w-9/12">
                                    <p className="text-2xl font-bold pb-4">It's not as easy as 1-2-3.</p>
                                    <p className="font-semibold">The journey of change may be long, but our sessions are quick. We get   <br />
                                    to the point and tell you what you want to know (and nothing else).
                                    </p>
                                </div>
                            </div>

                            <div className="relative flex gap-5 items-center w-full">
                                <div className="h-3 w-3 rounded-full bg-purple self-start"></div>
                                <div className="-mt-1 w-9/12">
                                    <p className="text-2xl font-bold pb-4">It's not as easy as 1-2-3.</p>
                                    <p className="font-semibold">The journey of change may be long, but our sessions are quick. We get   <br />
                                    to the point and tell you what you want to know (and nothing else).
                                    </p>
                                </div>
                            </div>

                            <div className="relative flex gap-5 items-center w-full">
                                <div className="h-3 w-3 rounded-full bg-purple self-start"></div>
                                <div className="-mt-1 w-9/12">
                                    <p className="text-2xl font-bold pb-4">It's not as easy as 1-2-3.</p>
                                    <p className="font-semibold">The journey of change may be long, but our sessions are quick. We get   <br />
                                    to the point and tell you what you want to know (and nothing else).
                                    </p>
                                </div>
                            </div>

                            <div className="relative flex gap-5 items-center w-full">
                                <div className="h-3 w-3 rounded-full bg-purple self-start"></div>
                                <div className="-mt-1 w-9/12">
                                    <p className="text-2xl font-bold pb-4">It's not as easy as 1-2-3.</p>
                                    <p className="font-semibold">The journey of change may be long, but our sessions are quick. We get   <br />
                                    to the point and tell you what you want to know (and nothing else).
                                    </p>
                                </div>
                            </div>

                            <div className="relative flex gap-5 items-center w-full">
                                <div className="h-3 w-3 rounded-full bg-purple self-start"></div>
                                <div className="-mt-1 w-9/12">
                                    <p className="text-2xl font-bold pb-4">It's not as easy as 1-2-3.</p>
                                    <p className="font-semibold">The journey of change may be long, but our sessions are quick. We get   <br />
                                    to the point and tell you what you want to know (and nothing else).
                                    </p>
                                </div>
                            </div>

                            <div className="relative flex gap-5 items-center w-full">
                                <div className="h-3 w-3 rounded-full bg-purple self-start"></div>
                                <div className="-mt-1 w-9/12">
                                    <p className="text-2xl font-bold pb-4">It's not as easy as 1-2-3.</p>
                                    <p className="font-semibold">The journey of change may be long, but our sessions are quick. We get   <br />
                                    to the point and tell you what you want to know (and nothing else).
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* sixth div */}
                <div className="flex mt-20 px-20 py-52 justify-center gap-6">
                    <div className="basis-6/12">
                        <p className="text-3xl font-bold">Be the best you <br /> with EQ</p>
                    </div>
                    <div className="basis-6/12">
                        <p className="text-2xl">
                            Not having your own emotions under control might be holding you back.
                        </p>
                    </div>
                    <div className="basis-6/12">
                        <p className="text-2xl">
                            Additionally, not understanding those of others stops you from being parent, friend you can be.
                        </p>
                    </div>
                </div>

                {/* 7th div */}
                <div className="px-8">
                    <div className="py-20 px-6 bg-light-greenish rounded-3xl flex flex-col items-center">
                        <p className="font-semibold mb-8 text-xl">Let your friends, family, and co-workers (anonymously) rate your social skills.</p>
                        <p className="text-5xl font-bold">Ever wondered what others think of you?</p>

                        <div className="flex pt-20 pb-36">
                            <div className="relative">
                                {/* golden line */}
                                <div className="flex gap-3 justify-center">
                                    <div className="bg-golden w-5 h-1"></div>
                                    <div className="bg-golden w-5 h-1"></div>
                                    <div className="bg-golden w-5 h-1"></div>
                                    <div className="bg-golden w-5 h-1"></div>
                                    <div className="bg-golden w-5 h-1"></div>
                                    <div className="bg-golden w-5 h-1"></div>
                                    <div className="bg-golden w-5 h-1"></div>
                                    <div className="bg-golden w-5 h-1"></div>
                                    <div className="bg-golden w-5 h-1"></div>
                                    <div className="bg-golden w-5 h-1"></div>
                                    <div className="bg-golden w-5 h-1"></div>
                                    <div className="bg-golden w-5 h-1"></div>
                                    <div className="bg-golden w-5 h-1"></div>
                                    <div className="bg-golden w-5 h-1"></div>
                                    <div className="bg-golden w-5 h-1"></div>
                                    <div className="bg-golden w-5 h-1"></div>
                                    <div className="bg-golden w-5 h-1"></div>
                                    <div className="bg-golden w-5 h-1"></div>
                                    <div className="bg-golden w-5 h-1"></div>
                                    <div className="bg-golden w-5 h-1"></div>
                                    <div className="bg-golden w-5 h-1"></div>

                                </div>

                                <div className="absolute flex items-center gap-4 -mt-7 w-full">
                                    <div className="relative flex w-full">
                                        <div className="absolute -left-28  flex flex-col items-center gap-4 basis-1/3">
                                            <Image src={no1} alt="no1" className="w-12"/>
                                            <p className="text-center text-sm">Answer questions on your social skills</p>
                                        </div>

                                        <div className="absolute left-52 flex flex-col items-center gap-4 basis-1/3">
                                            <Image src={no2} alt="no1" className="w-12"/>
                                            <p className="text-center text-sm">Let others anonymously answer the same <br /> questions about you</p>
                                        </div>

                                        <div className="absolute -right-32 flex flex-col items-center gap-4">
                                            <Image src={no3} alt="no1" className="w-12"/>
                                            <p className="text-center text-sm">Find out where you and others see things <br /> the same way - and where not!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl h-44 w-1/2 flex justify-center items-center py-6 px-8 pr-12 shadow-xl">
                            <div className="relative border-2 border-gray justify-self-stretch w-full">
                                <div className="absolute flex flex-col gap-3 -left-11 -top-16">
                                    <p className="px-4 py-2 rounded-lg text-white bg-ball1">You</p>
                                    <div className="w-5 h-5 rounded-full bg-ball1 self-end"></div>
                                </div>

                                <div className="absolute flex flex-col gap-3 left-32 -top-2">
                                    <div className="w-5 h-5 rounded-full bg-ball2"></div>
                                    <p className="px-4 py-2 rounded-lg text-white bg-ball2">Anonymous1</p>
                                </div>

                                <div className="absolute flex flex-col gap-3 right-20 -top-16">
                                    <p className="px-4 py-2 rounded-lg text-white bg-ball3">Anonymous2</p>
                                    <div className="w-5 h-5 rounded-full bg-ball3 "></div>
                                </div>

                                <div className="absolute flex flex-col gap-3 -right-32 -top-2">
                                    <div className="w-5 h-5 rounded-full bg-ball4"></div>
                                    <p className="px-4 py-2 rounded-lg text-white bg-ball4">Anonymous3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 8th div */}
                <div className="py-28 flex flex-col items-center">
                    <p className="text-xl text-center">We take privacy seriously</p>
                    <p className="text-4xl text-center my-5 font-bold">Before you get started</p>
                    <p className="text-2xl text-center text-textgray">"We won't share your answers with anyone (and won't ever tell <br />
                        you which friends  said what about you)"
                    </p>
                    <p className="text-xl text-center my-6">with love, Jackie Chan</p>

                    <button className="bg-black text-white rounded-full px-5 py-2 my-5">Start a test</button>
                    <p className="text-center text-textgray text-sm">Take only 5 minutes</p>
                </div>

                {/* 9th div */}
                <div className="px-8">
                    <div className="bg-light-grayish px-16 pt-20 pb-2 rounded-3xl">
                        <div className="flex pb-10 justify-between pr-20">
                            <p className="text-5xl font-bold">Work with us</p>
                            <p className="text-5xl font-bold text-darkpurple">ahead</p>
                        </div>

                        <div className="flex justify-between">
                            <div className=" bg-white rounded-xl pt-2 self-start  shadow-xl">
                                <Image src={purplespirit} alt="spirit" className="pt-6 ml-10"/>

                                <div className="py-6 px-10">
                                    <p className="font-semibold py-2 text-xl">About</p>
                                    <p className="text-textgray">
                                        At ahead our goal is to make self- <br />
                                        improvement fun and lasting. We know there's <br />
                                        a way how to make it work. And that's what <br />
                                        aHead is all about.
                                    </p>
                                </div>

                                <div className="rounded-xl bg-productbackground px-10 py-6">
                                    <p className="font-semibold py-2 text-xl">Product</p>
                                    <p className="text-textgray">
                                        Sure, you could spend ages reading books or <br />
                                        sitting in seminars on how to become a better <br />
                                        spouse, parent, or manager - like we did...
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col flex-shrink-0 overflow-y-scroll pr-16 pb-4 h-33 gap-4 self-start scrollingg">

                                <div className="px-5 py-6 bg-white rounded-xl flex-shrink-0">
                                    <p className="font-semibold mb-3">
                                        Power through, even when the <br />
                                        going gets tough
                                    </p>

                                    <p className="text-sm">
                                        We help you spot and work around <br />
                                        whatever stands in the way, be it bad <br />
                                        habits, fears, etc.
                                    </p>
                                </div>

                                <div className="px-5 py-6 bg-white rounded-xl flex-shrink-0">
                                    <p className="font-semibold mb-3">
                                        Power through, even when the <br />
                                        going gets tough
                                    </p>

                                    <p className="text-sm">
                                        We help you spot and work around <br />
                                        whatever stands in the way, be it bad <br />
                                        habits, fears, etc.
                                    </p>
                                </div>

                                <div className="px-5 py-6 bg-white rounded-xl flex-shrink-0">
                                    <p className="font-semibold mb-3">
                                        Power through, even when the <br />
                                        going gets tough
                                    </p>

                                    <p className="text-sm">
                                        We help you spot and work around <br />
                                        whatever stands in the way, be it bad <br />
                                        habits, fears, etc.
                                    </p>
                                </div>

                                <div className="px-5 py-6 bg-white rounded-xl flex-shrink-0">
                                    <p className="font-semibold mb-3">
                                        Power through, even when the <br />
                                        going gets tough
                                    </p>

                                    <p className="text-sm">
                                        We help you spot and work around <br />
                                        whatever stands in the way, be it bad <br />
                                        habits, fears, etc.
                                    </p>
                                </div>

                                
                            </div>
                        </div>
                        
                        <div></div>
                    </div>
                </div>

                {/* 10th div */}
                <div className="px-28 py-20">
                    <p className="text-4xl font-bold pb-11">Open vacancies</p>
                    <div className="flex gap-5">
                        <div className="py-6 px-7 bg-jobbackground rounded-xl">
                            <p className="font-bold mb-3">Senior Full-Stack Engineer</p>
                            <ul className="list-disc pl-4 flex flex-col gap-3">
                                <li className="text-sm">Full-time position</li>
                                <li className="text-sm">Berlin or remote</li>
                                <li className="text-sm">$65-85k, 0.5-1.50% equity share options</li>
                            </ul>
                            <button className="mt-4 px-6 py-2 rounded-full bg-black text-white">info</button>
                        </div>
                        <div className="p-6 px-7 bg-jobbackground rounded-xl">
                            <p className="font-bold mb-3">Senior Full-Stack Engineer</p>
                            <ul className="list-disc pl-4 flex flex-col gap-3">
                                <li className="text-sm">Full-time position</li>
                                <li className="text-sm">Berlin or remote</li>
                                <li className="text-sm">$65-85k, 0.5-1.50% equity share options</li>
                            </ul>
                        </div>
                        <div className="p-6 px-7 bg-jobbackground rounded-xl">
                            <p className="font-bold mb-3">Senior Full-Stack Engineer</p>
                            <ul className="list-disc pl-4 flex flex-col gap-3">
                                <li className="text-sm">Full-time position</li>
                                <li className="text-sm">Berlin or remote</li>
                                <li className="text-sm">$65-85k, 0.5-1.50% equity share options</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 11th div */}
                <div className="mt-10 py-6 border-t-2 border-gray pb-20 flex justify-center flex-col items-center">
                    <div>
                        <Image src={smiley} className='w-16' alt='pic'/>
                        <p className="font-semibold text-2xl text-darkpurple">ahead</p>
                    </div>

                    <div className="flex gap-7 mt-5">
                        <div>
                            <p className="font-semibold text-sm">AuguststraBe 26, 10117 Berlin</p>
                        </div>

                        <div>
                            <p className="font-semibold text-sm">hi@ahead-app.com</p>
                        </div>
                    </div>

                    <div className="bg-black mt-8 py-1 px-2 flex items-center gap-1 rounded-md">
                        <Image src={appleIcon} alt="appleicon" className="w-10 h-10"/>
                            <div>
                                <p className="text-white text-xs leading-3">Download on the</p>
                                <p className="text-white text-xl font-semibold">App Store</p>
                            </div>
                    </div>

                    <p className="text-xs text-textgray mt-10">@2022 Ahead app. All right reserved</p>
                </div>
            </section>
        </main>
    )
}