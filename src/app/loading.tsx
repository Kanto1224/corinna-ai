import Image from 'next/image'

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50/30 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-6">
        {/* Logo with subtle animation */}
        <div className="relative">
          <div className="absolute inset-0 bg-orange/20 rounded-full blur-xl animate-pulse"></div>
          <Image
            src="/images/logo.png"
            alt="Chatvise Logo"
            width={80}
            height={80}
            className="w-20 h-20 relative z-10"
          />
        </div>

        {/* Loading indicator */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-orange rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-orange rounded-full animate-bounce [animation-delay:-.3s]"></div>
          <div className="w-3 h-3 bg-orange rounded-full animate-bounce [animation-delay:-.5s]"></div>
        </div>

        {/* Loading text */}
        <p className="text-gray-600 font-medium">
          Chatvise wird geladen...
        </p>
      </div>
    </div>
  )
}