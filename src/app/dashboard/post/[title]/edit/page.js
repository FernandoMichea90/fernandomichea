import PropTypes from 'prop-types';
// utils
import { paramCase } from 'src/utils/change-case';
import axios, { endpoints } from 'src/utils/axios';
// sections
import { PostEditView } from 'src/sections/blog/view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Dashboard: Post Edit',
};

export default function PostEditPage({ params }) {
  const { title } = params;

  return <PostEditView title={params.title} />;
}

export async function generateStaticParams() {
  const res = await axios.get(endpoints.post.list);

  return res.data.posts.map((post) => ({
    title: paramCase(post.title),
  }));
}

PostEditPage.propTypes = {
  params: PropTypes.shape({
    title: PropTypes.string,
  }),
};
