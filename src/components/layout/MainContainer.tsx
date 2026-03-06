interface MainContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function MainContainer({
  children,
  className = "",
}: MainContainerProps) {
  return (
    <main className={`main-content-area container-fluid py-4 px-4 ${className}`}>
      {children}
    </main>
  );
}
