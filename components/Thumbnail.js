import Image from "next/image"
import { ThumbUpIcon } from "@heroicons/react/outline"
import { forwardRef } from "react"

const Thumbnail = forwardRef(({result}, ref) => {

    const baseUrl = "https://image.tmdb.org/t/p/original/"

    return (
        <div ref={ref} className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 max-w-2xl">
            <Image
                layout="responsive"
                src={`${baseUrl}${result.backdrop_path || result.poster_path || result.backdrop_path}`}
                height={1080}
                width={1920}
            />

            <div className="p-2">
                <p className="line-clamp-1">{result.overview}</p>
                <h2 className="mt-1 text-2xl transition-all ease-in-out duration-100 group-hover:font-bold text-white">{result.title || result.original_name}</h2>
                <p className="flex items-center opacity-0 group-hover:opacity-100">
                    {result.media_type && `${result.media_type.toUpperCase()} •`}{" "}
                    {result.release_date || result.first_air_date} •{" "}
                    <ThumbUpIcon className="h-5 mx-2" /> { result.vote_count }
                </p>
            </div>
        </div>
    )
})

export default Thumbnail;