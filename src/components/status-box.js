import PropTypes from 'prop-types';

export default function StatusBox({ status = 'idle' }) {
  const title = {
    idle: `😴 Chillin'`,
    pending: `⏳ Fetchin'`,
    success: '✅ Success',
    error: '❌ Error',
  };

  const paragraph = {
    idle: 'Waiting for something to do ...',
    pending: `Wait a sec, it shouldn't take long ...`,
    success: 'Mission accomplished, maybe a pay rise?',
    error: 'Ooops, something went wrong :(',
  };

  return (
    <div>
      <h2>{title[status]}</h2>
      <p>{paragraph[status]}</p>
    </div>
  );
}

StatusBox.propTypes = {
  status: PropTypes.oneOf(['idle', 'pending', 'success', 'error']),
};
