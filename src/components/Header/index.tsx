type HeaderProps = {
  showDescription: boolean;
};

export function Header({ showDescription }: HeaderProps) {
  return (
    <>
      <header className="flex flex-col gap-6 pt-12">
        <div className="flex flex-row justify-between items-center">
          <a href="/">
            <h1 className="font-medium text-2xl hover:opacity-70">Eadafonso</h1>
          </a>

          <div className="flex flex-row gap-4 text-sm items-center">
            <a href="https://github.com/eadafonso" className="text-blue-600">
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/edvaldo-afonso-13a222140/"
              className="text-blue-600"
            >
              Linkedin
            </a>
          </div>
        </div>

        {showDescription && (
          <span>
            Olá, sou o <strong>Edvaldo Afonso</strong> desenvolvedor frontend.
            Trabalho na{" "}
            <a href="https://lbc-global.com/" className="text-blue-600 ">
              LBC{" "}
            </a>
            como desenvolvedor sênior. Onde foco em unir design e funcionalidade
            para oferecer interfaces que sejam intuitivas, acessíveis e
            agradáveis de usar."
          </span>
        )}
      </header>
    </>
  );
}
