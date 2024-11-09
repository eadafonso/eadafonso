type HeaderProps = {
  showDescription: boolean;
};

export function Header({ showDescription }: HeaderProps) {
  return (
    <>
      <header className="flex flex-col gap-6 pt-12">
        <a href="/">
          <h1 className="font-medium text-2xl hover:opacity-70">Eadafonso</h1>
        </a>

        {showDescription && (
          <span>
            Sou um desenvolvedor frontend, apaixonado por uma boa UX em websites
            e aplicações web. Trabalho na{" "}
            <a href="https://lbc-global.com/" className="text-blue-600 ">
              LBC{" "}
            </a>
            como desenvolvedor sênior.
          </span>
        )}
      </header>
    </>
  );
}
