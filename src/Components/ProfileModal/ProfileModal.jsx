import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, useMantineTheme } from '@mantine/core';

function ProfileModal({ modalOpen, setModalOpen }) {
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
        <form className="infoForm">
          <h3>Your info</h3>

          <div>
            <input
              type="text"
              className="infoInput"
              name="firstName"
              placeholder="First Name"
            />

            <input
              type="text"
              className="infoInput"
              name="lastName"
              placeholder="Last Name"
            />
          </div>
          <div>
            <input
              type="text"
              className="infoInput"
              name="worksAt"
              placeholder="Works At"
            />
          </div>
          <div>
            <input
              type="text"
              className="infoInput"
              name="livesIn"
              placeholder="Lives In"
            />

            <input
              type="text"
              className="infoInput"
              name="country"
              placeholder="Country"
            />
          </div>

          <div>
            <input
              type="text"
              className="infoInput"
              name="relationshipStatus"
              placeholder="Relationship Status"
            />
          </div>
          <div>
            Profile Image
            <input
              type="file"
              name="profileImg"
              style={{ cursor: 'pointer' }}
            />
            Cover Image
            <input type="file" name="coverImg" style={{ cursor: 'pointer' }} />
          </div>
          <button className="button infoButton">Update</button>
        </form>
      </Modal>
    </>
  );
}

export default ProfileModal;
