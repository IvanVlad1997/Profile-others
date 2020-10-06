import NOTES from './notes'

export default function getNotesBetween(startNote, endNote) {
    const startingIndex = NOTES.indexOf(startNote)
    const endigIndex = NOTES.indexOf(endNote)
    return NOTES.slice(startingIndex, endigIndex +1)
}