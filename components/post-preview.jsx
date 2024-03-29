import Avatar from './avatar';
import CoverImage from './cover-image';
import DateFormatter from './date-formatter';
import Link from 'next/link';

const PostPreview = ({ title, coverImage, date, excerpt, author, slug }) => {
  return (
    <>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} height={278} width={556} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/blog/${slug}`}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </>
  );
};
export default PostPreview;
