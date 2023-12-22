import { PageDefault } from '../pageDefault';
import { useCineContext } from '../../context/MoviesContext';

export function DetailsPage() {
  const { search } = useCineContext();
  return (
    <PageDefault
      title={`Resultados para: ${search}`}
      url={`/search/movie?query=${search}&include_adult=false&language=pt-BR&page=1`}
    />
  );
}
