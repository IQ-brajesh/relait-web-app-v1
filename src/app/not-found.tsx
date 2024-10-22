"use client"
import { useRouter } from "next/navigation";
import {
    Button,
} from "@material-tailwind/react";
import { Error404 } from "./components/icons";
export default function NotFound(){
    const router = useRouter();
    const clickHandeler = () => {
        router.back();
    }
    return(
        <div className="p-8 text-center">
            <Error404 className="text-default-500 h-[60vh] w-full m-auto" />
            <h1 className='text-primary-500 text-3xl font-semibold mt-4'>Oops...</h1>
            <h3 className='text-black dark:text-white text-2xl font-semibold'>Page not found</h3>
            <div className='text-gray-500 mt-2 mb-6'>The page you are looking for doesn't exist or another error occurred</div>
            <Button size="lg"
                color="amber"
                className="flex items-center gap-3 m-auto rounded text-white"
                onClick={clickHandeler}
            >
                <i className="fa-solid fa-chevron-left"></i>
                Go Back
            </Button>
        </div>
    );
}