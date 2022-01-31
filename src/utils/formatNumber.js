export default (number)  => {
  const formatNumberingh = new Intl.NumberFormat('id-ID');
  return formatNumberingh.format(number);
}
