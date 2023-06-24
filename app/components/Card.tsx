import Image from "next/image";
import Link from "next/link";

type PropType = {
  title: string;
  poster_path: string;
  id: number;
};

export default function Card({ title, id, poster_path }: PropType) {
  return (
    <div>
      <div className="text-2xl text-center mb-1">{title}</div>
      <Link href={id.toString()}>
        <Image
          className="w-64 h-120 object-cover rounded-lg"
          src={process.env.IMAGE_URL + poster_path}
          width={1000}
          height={1000}
          alt={title}
        />
      </Link>
    </div>
  );
}
