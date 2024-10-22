"use client"
import React from "react";
import {
    Select, Option, Input,
    Popover,
    PopoverHandler,
    PopoverContent,
    Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Chip 
  } from "@material-tailwind/react";
  import { format } from "date-fns";
  import { DayPicker } from "react-day-picker";
  import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
  import Image from 'next/image'
import Link from 'next/link'
import project001 from '../../assets/img/project001.png';
import project002 from '../../assets/img/project002.png';
import project003 from '../../assets/img/project003.png';
import project004 from '../../assets/img/project004.png';
import project005 from '../../assets/img/project005.png';
export default function Dashboard() {
    const [date, setDate] = React.useState<Date>();
  return (
    <>
    <section className="bg-gradient-to-r from-amber-100 to-amber-50">
        <div className="container mx-auto max-w-[1200px] px-4">
            <div className="grid grid-cols-2 md:gap-4 items-center text-center md:text-start py-4 lg:py-5 xl:py-6">
                <div className="col-span-2 lg:col-span-1">
                    <h1 className="text-md md:text-lg xl:text-xl font-raleway font-semibold">
                        My Dashboard
                    </h1>
                    <div className="text-sm">Manage and Track your designs</div>
                </div>
                <div className="col-span-2 lg:col-span-1 flex justify-center md:justify-end">
                    <div className="flex-1 grid grid-cols-12 gap-4 mt-4 md:mt-0">
                        <div className="col-span-12 sm:col-span-4">
                            <Popover placement="bottom">
                                <PopoverHandler>
                                    <Input
                                        label="Select a Date"
                                        onChange={() => null}
                                        containerProps={{
                                            className: "!min-w-[100%]",
                                        }}
                                        value={date ? format(date, "PPP") : ""}
                                        icon={<i className="fa-solid fa-calendar-days"></i>}
                                    />
                                </PopoverHandler>
                                <PopoverContent>
                                <DayPicker
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    showOutsideDays
                                    className="border-0"
                                    classNames={{
                                    caption: "flex justify-center py-2 mb-4 relative items-center",
                                    caption_label: "text-sm font-medium text-gray-900 text-center block pb-[16px] mt-[-20px]",
                                    nav: "flex items-center justify-between",
                                    nav_button:
                                        "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                                    nav_button_previous: "absolute left-1.5",
                                    nav_button_next: "absolute right-1.5",
                                    table: "w-full border-collapse",
                                    head_row: "flex font-medium text-gray-900",
                                    head_cell: "m-0.5 w-9 font-normal text-sm",
                                    row: "flex w-full mt-2",
                                    cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                                    day: "h-9 w-9 p-0 font-normal text-center",
                                    day_range_end: "day-range-end",
                                    day_selected:
                                        "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                                    day_today: "rounded-md bg-gray-200 text-gray-900",
                                    day_outside:
                                        "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                                    day_disabled: "text-gray-500 opacity-50",
                                    day_hidden: "invisible",
                                    }}
                                    components={{
                                    IconLeft: ({ ...props }) => (
                                        <ChevronLeftIcon {...props} className="h-4 w-4 stroke-1" />
                                    ),
                                    IconRight: ({ ...props }) => (
                                        <ChevronRightIcon {...props} className="h-4 w-4 stroke-1" />
                                    ),
                                    }}
                                />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="col-span-12 sm:col-span-4">
                            <Select size="md" label="Project Type" containerProps={{
                                        className: "!min-w-[100%]",
                                    }}>
                                <Option>Type 01</Option>
                                <Option>Type 02</Option>
                                <Option>Type 03</Option>
                                <Option>Type 04</Option>
                            </Select>
                        </div>
                        <div className="col-span-12 sm:col-span-4">
                            <Select size="md" label="Project Status" containerProps={{
                                        className: "!min-w-[100%]",
                                    }}>
                                <Option>Completed</Option>
                                <Option>In Progress</Option>
                                <Option>Pending</Option>
                                <Option>Cancelled</Option>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <main className="min-h-[50vh]">
        <div className="container mx-auto max-w-[1200px] px-4">
            <div className="my-8 xl:my-12">
                <div className="text-center">
                    <h1 className="inline-block text-xl md:text-2xl xl:text-3xl text-slate-800 font-bold relative before:absolute before:block before:h-[3px] before:left-[33.33%] before:bottom-[-1rem] before:bg-primary-500 before:right-[33.33%]">Select & Track Project</h1>
                </div>
                <div className="grid grid-cols-12 gap-4 lg:gap-6 my-8 lg:my-12">
                    <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                        <Card className="w-full border transition-all hover:border-primary-500">
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-1">
                                    Medical Office Building
                                </Typography>
                                <div className="flex items-center">
                                    <div className="flex-1">
                                        <strong className="text-lg text-primary-500 font-medium">Office</strong>
                                    </div>
                                    <div className="text-xs">
                                        Tues, 12 Sep 2024
                                    </div>
                                </div>
                                <Link href="/scan" className="block overflow-hidden">
                                    <Image
                                        src={project001}
                                        alt="Relait"
                                        className="mt-3 w-auto h-60 m-auto object-cover scale-95 transition-all hover:scale-100"
                                    />
                                </Link>
                            </CardBody>
                            <CardFooter className="text-center pt-0">
                                <Chip color="green" value="Completed" className="inline-block rounded-full" />
                            </CardFooter>
                        </Card>
                    </div>
                    <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                        <Card className="w-full border transition-all hover:border-primary-500">
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-1">
                                Lactation Clinic
                                </Typography>
                                <div className="flex items-center">
                                    <div className="flex-1">
                                        <strong className="text-lg text-primary-500 font-medium">Hospital</strong>
                                    </div>
                                    <div className="text-xs">
                                        Tues, 12 Sep 2024
                                    </div>
                                </div>
                                <Link href="/scan" className="block overflow-hidden">
                                    <Image
                                        src={project002}
                                        alt="Relait"
                                        className="mt-3 w-auto h-60 m-auto object-cover scale-95 transition-all hover:scale-100"
                                    />
                                </Link>
                            </CardBody>
                            <CardFooter className="text-center pt-0">
                                <Chip variant="outlined" color="green" value="In Progress" className="inline-block rounded-full" />
                            </CardFooter>
                        </Card>
                    </div>
                    <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                        <Card className="w-full border transition-all hover:border-primary-500">
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-1">
                                Orthopedic Clinic
                                </Typography>
                                <div className="flex items-center">
                                    <div className="flex-1">
                                        <strong className="text-lg text-primary-500 font-medium">Office</strong>
                                    </div>
                                    <div className="text-xs">
                                        Tues, 12 Sep 2024
                                    </div>
                                </div>
                                <Link href="/scan" className="block overflow-hidden">
                                    <Image
                                        src={project003}
                                        alt="Relait"
                                        className="mt-3 w-auto h-60 m-auto object-cover scale-95 transition-all hover:scale-100"
                                    />
                                </Link>
                            </CardBody>
                            <CardFooter className="text-center pt-0">
                                <Chip variant="outlined" color="amber" value="Pending" className="inline-block rounded-full" />
                            </CardFooter>
                        </Card>
                    </div>
                    <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                        <Card className="w-full border transition-all hover:border-primary-500">
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-1">
                                    Medical Office Building
                                </Typography>
                                <div className="flex items-center">
                                    <div className="flex-1">
                                        <strong className="text-lg text-primary-500 font-medium">Office</strong>
                                    </div>
                                    <div className="text-xs">
                                        Tues, 12 Sep 2024
                                    </div>
                                </div>
                                <Link href="/scan" className="block overflow-hidden">
                                    <Image
                                        src={project004}
                                        alt="Relait"
                                        className="mt-3 w-auto h-60 m-auto object-cover scale-95 transition-all hover:scale-100"
                                    />
                                </Link>
                            </CardBody>
                            <CardFooter className="text-center pt-0">
                            <Chip variant="outlined" color="amber" value="Pending" className="inline-block rounded-full" />
                            </CardFooter>
                        </Card>
                    </div>
                    <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                        <Card className="w-full border transition-all hover:border-primary-500">
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-1">
                                    Medical Office Building
                                </Typography>
                                <div className="flex items-center">
                                    <div className="flex-1">
                                        <strong className="text-lg text-primary-500 font-medium">Office</strong>
                                    </div>
                                    <div className="text-xs">
                                        Tues, 12 Sep 2024
                                    </div>
                                </div>
                                <Link href="/scan" className="block overflow-hidden">
                                    <Image
                                        src={project005}
                                        alt="Relait"
                                        className="mt-3 w-auto h-60 m-auto object-cover scale-95 transition-all hover:scale-100"
                                    />
                                </Link>
                            </CardBody>
                            <CardFooter className="text-center pt-0">
                                <Chip variant="outlined" color="red" value="Cancelled" className="inline-block rounded-full" />
                            </CardFooter>
                        </Card>
                    </div>
                    <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                        <Card className="w-full border h-full flex items-center justify-center transition-all hover:border-primary-500">
                            <CardBody>
                                <Button fullWidth variant="outlined" size="sm" color="brown" className="flex rounded py-3 px-6 items-center hover:bg-gradient-to-tr hover:from-amber-600 hover:to-green-400 hover:text-white hover:border-transparent shadow-btn hover:shadow-none hover:opacity-100">
                                    Order new Design
                                    <i className="fa-solid fa-arrow-right ms-2"></i>
                                </Button>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </>
  );
}
