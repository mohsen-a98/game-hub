import { useTrailers } from "../hooks/useTrailers";

interface GameTrailerProps {
  gameId: number;
}

function GameTrailer({ gameId }: GameTrailerProps) {
  const { data, isLoading, error } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const firstTrailer = data?.results[0];

  return (
    <video
      src={firstTrailer?.data[480]}
      poster={firstTrailer?.preview}
      controls
      width="100%"
    />
  );
}

export default GameTrailer;
