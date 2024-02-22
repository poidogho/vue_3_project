import { ref, onUnmounted } from 'vue'
export const useGetCounter = () => {
    let counter = ref(0)

    const interval = setInterval(() => {
        console.log("in here")
        counter.value++;
        counter.value = counter.value > 60 ? 0 : counter.value;

        // counter.value = (counter.value + 1) % 61;
    }, 1000)
    console.log(counter.value)

    onUnmounted(() => {
        clearInterval(interval)
    })
    return { counter }
}