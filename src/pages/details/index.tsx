import { PageDefault } from '../pageDefault';
import { useParams } from 'react-router-dom';

export function DetailsPage() {
  const params = useParams();
  return (
    <PageDefault
      title={`Resultados para: ${params.title}`}
      url={`/search/movie?query=${params.title}&include_adult=false&language=pt-BR&page=1`}
    />
  );
}
