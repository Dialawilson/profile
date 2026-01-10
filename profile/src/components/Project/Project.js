import Link from "next/link";
const Project =()=>{
    return(
        <>
        <section className=" md:px-24 py-12">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 ">
                    <h3 className="text-[2rem]"><span className="text-[#C778DD]">#</span>Projects </h3>
                    <hr className="border border-[#C778DD] w-64"></hr>
                    
                </div>
                <div>
                <Link href="/project">View all </Link>
                <span className=" tracking-tighter">{"~~~>"}</span>
                </div>

            </div>

            

        </section>
        
        </>
    )
}
export default Project;