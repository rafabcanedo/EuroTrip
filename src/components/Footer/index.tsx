export default function Footer() {
  return (
    <div className="flex flex-col mt-8 p-8 justify-center items-center gap-2">
      <span className="text-title text-lg font-signika">
        Feito com amor 💛 por Rafa Canedo
      </span>
      <p className="text-title text-sm font-mono">
        &copy; {new Date().getFullYear()} Canedo. All rights reserved
      </p>
    </div>
  )
}
