export default function getListStudentIds(objArray) {
  if (Array.isArray(objArray) !== true) {
    return [];
  }

  return objArray.map((newobjArray) => newobjArray.id);
}
