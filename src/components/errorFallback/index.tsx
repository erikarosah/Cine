import * as S from './style';

interface ErrorFallbackProps {
  error?: Error;
}

export function handleToHome() {
  window.location.replace('/');
}

export function ErrorFallback({ error }: ErrorFallbackProps) {
  return (
    <S.Container>
      <S.Content>
        <h1>Ops! Algo deu errado</h1>
        <p>{error?.message}</p>

        <button onClick={handleToHome}>Voltar para pagina inicial</button>
      </S.Content>
    </S.Container>
  );
}
