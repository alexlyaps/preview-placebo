export default function useApplicationForm() {
  const isOpened = useState("isApplicationFormOpened", () => false);
  const setIsOpened = () => {
    isOpened.value = !isOpened.value;
  };

  return { isOpened, setIsOpened };
}
