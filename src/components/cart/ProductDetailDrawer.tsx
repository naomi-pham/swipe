import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';

interface DialogProps {
  isOpen: boolean;
  closeModal: () => void;
}

const ProductDetailDrawer = ({ isOpen, closeModal }: DialogProps) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black/30' />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter='transition ease-in-out duration-300 transform'
          enterFrom='translate-x-full'
          enterTo='translate-x-0'
          leave='transition ease-in-out duration-300 transform'
          leaveFrom='translate-x-0'
          leaveTo='translate-x-full'
        >
          <Dialog.Panel
            as='div'
            className='fixed inset-0 z-20 ml-auto w-1/3 bg-white p-6 shadow-2xl'
          >
            <Dialog.Title>Deactivate account</Dialog.Title>
            <Dialog.Description>
              This will permanently deactivate your account
            </Dialog.Description>
            <p>
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed. This action cannot be undone.
            </p>
            <button onClick={closeModal}>Close</button>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default ProductDetailDrawer;
