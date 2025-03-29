export default function Footer() {
    const d = new Date();
    const year = d.getFullYear();
    return (
        <footer className="bg-slate-600 p-4  w-full flex justify-center items-center text-center ">
            <p className=" text-sm text-slate-400 ">© {year} #vans4you</p>
        </footer>
    );
}