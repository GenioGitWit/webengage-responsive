export function setupEmail(element: HTMLInputElement) {
    let value = ''
    const setValue = (val: string) => {
      value = val
      element.value = value;
    }
    element.addEventListener('change', () => setValue(value))
    setValue('')
    console.log('value : ', value);
  }