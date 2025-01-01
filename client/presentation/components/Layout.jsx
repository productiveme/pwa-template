export const Layout = ({ children }) => (
  <div className="min-h-screen bg-background">
    <nav className="bg-background-card border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-text font-semibold text-xl">App Name</span>
          </div>
        </div>
      </div>
    </nav>
    <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      {children}
    </main>
  </div>
)
