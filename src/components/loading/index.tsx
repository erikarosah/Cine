import * as S from './style';

export function Loading() {
  return (
    <S.Container>
      <S.Content>
        <h1>Carregando...</h1>
        <div className="circle"></div>
      </S.Content>
    </S.Container>
  );
}
