import { Link } from "react-router-dom";
import authorImage from "../../assets/author.png";

export default function Video({video}) {
    return (
        <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
            <div className="w-full flex flex-col">
                <div className="relative">
                    <Link to={`/videos/${video?.id}`}>
                        <img
                            src={video.thumbnail}
                            className="w-full h-auto"
                            alt={video.title}
                        />
                    </Link>

                    <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                        {video.duration}
                    </p>
                </div>

                <div className="flex flex-row mt-2 gap-2">
                    <img
                        src={authorImage}
                        className="rounded-full h-6 w-6 shrink-0"
                        alt={video.author}
                    />

                    <div clas="flex flex-col">
                        <Link to="/videos/1">
                            <p className="text-slate-900 text-sm font-semibold">
                                {video.title}
                            </p>
                        </Link>
                        <span className="text-gray-400 text-xs hover:text-gray-600">
                            {video.author}
                        </span>
                        <p className="text-gray-400 text-xs">
                            {video.views} views . {video.date}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
