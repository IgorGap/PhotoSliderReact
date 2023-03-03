import React, { useState } from 'react'
import { Modal, Button, Box, Typography, Input } from '@mui/material'
import {
  styleModal,
  BtnStyle,
  InputModal,
  BtnModal,
} from './css/componStyle.js'

const ModalWind = ({ setNewSlides }) => {
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const changeHandler = (event) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('inputvalue', inputValue)
    if (inputValue) {
      const newObj = { url: inputValue }
      setNewSlides((prev) => [...prev, newObj])
      console.log('newObj', newObj)
      handleClose()
    }
    setInputValue('')
  }

  return (
    <div>
      <Button style={BtnStyle} onClick={handleOpen}>
        Add
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Добавить новую картинку
          </Typography>
          <Input
            value={inputValue}
            onChange={changeHandler}
            placeholder=" URL ..."
            style={InputModal}
          ></Input>
          <Button onClick={handleSubmit} style={BtnModal}>
            Добавить
          </Button>
        </Box>
      </Modal>
    </div>
  )
}
export default ModalWind
