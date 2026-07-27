export default function Footer() {
  return (
    <footer className="w-full border-t bg-white/60">
      <div className="container mx-auto px-6 py-6 text-sm text-slate-600 flex items-center justify-between">
        <div>© {new Date().getFullYear()} Autheo — Built by ThothDivision</div>
        <div className="flex gap-4">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </div>
      </div>
    </footer>
  )
}
