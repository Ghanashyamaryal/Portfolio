export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-[1400px] mx-auto px-4  md:px-8 xl:px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-lg">GA</span>
            </div>
            <span className="text-lg font-semibold">Ghanashyam Aryal</span>
          </div>

          <div className="text-center text-slate-400">
            <p>&copy; {year} Ghanashyam Aryal. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
