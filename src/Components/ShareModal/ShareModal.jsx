import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, useMantineTheme } from '@mantine/core';
import PostShare from '../PostShare/PostShare';

function ShareModal({ modalOpen, setModalOpen }) {
  //   const [opened, { open, close }] = useDisclosure(false);

  //   const theme = useMantineTheme();

  return (
    <>
      <Modal
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        overlayOpacity={0.55}
        overlayBlur={3}
        size={'55%'}
      >
        <PostShare />
      </Modal>
    </>
  );
}

export default ShareModal;
