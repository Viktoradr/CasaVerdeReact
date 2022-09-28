import { NotFoundWarning } from "./styles";

export default function NotFoundPage() {
  return (
    <>
      <NotFoundWarning>
        <div>
          <h2>Error 404</h2>
          <h1>Not Found</h1>
          <p>
            Não foi possível encontrar sua solicitação. <a href="/">Clique aqui</a> e volte para Home.
          </p>
        </div>
      </NotFoundWarning>
    </>
  );
}
