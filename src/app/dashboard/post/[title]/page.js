import PropTypes from 'prop-types';
// utils
import { paramCase } from 'src/utils/change-case';
import axios, { endpoints } from 'src/utils/axios';
// sections
import { PostDetailsView } from 'src/sections/blog/view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Dashboard: Post Details',
};

export default function PostDetailsPage({ params }) {
  const { title } = params;

  return <PostDetailsView title={title} />;
}

export async function generateStaticParams() {
  try {
    const res = await axios.get(endpoints.post.list);
    return res.data.posts.map((post) => ({
      title: paramCase(post.title),
    }));
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error to be caught higher up the call stack
  }
}

PostDetailsPage.propTypes = {
  params: PropTypes.shape({
    title: PropTypes.string,
  }),
};
