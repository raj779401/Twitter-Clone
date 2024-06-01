


export default function News({news}){
    return(
       <a target="_blank" href={news.url}>
            <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-200 transition duration-200">
                <div className="space-y-0.5">
                    <h6 className="text-sm font-bold">{news.title}</h6>
                    <p className="text-sm font-medium text-gray-500">{news.source.name }</p>
                </div>
                <img  className="rounded-xl" width={70} height={70} src={news.urlToImage}/>
            </div>
       </a>
    );
}