import React, { useState } from "react";
import Modal from "./Modal";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>Contact</div>
      <button onClick={() => setIsOpen(true)}>Open PopUp</button>
      <Modal
        header={<p>Hello World!</p>}
        footer={<h1>Bye World!</h1>}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
          molestias? Eaque porro harum, blanditiis fuga itaque laborum alias
          minima perferendis quis, necessitatibus praesentium minus impedit
          quas, rerum possimus molestiae quibusdam aliquid non? Maiores
          aspernatur ipsam reiciendis veniam at eos! Hic qui provident nam
          pariatur saepe rem, ea laudantium quis sunt. Error vel enim
          consequatur illo nihil saepe tempore autem modi perferendis commodi?
          Dolor aspernatur, culpa saepe quidem eaque quam a voluptas dolores
          laudantium maxime ullam dicta tempora architecto deserunt corrupti
          omnis repellendus cum, veniam ipsum? Delectus explicabo minima ex ad,
          fugit omnis sit commodi consectetur voluptate labore id sunt ullam!
        </p>
      </Modal>
    </>
  );
}
