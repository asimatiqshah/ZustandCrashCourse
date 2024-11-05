import { create } from "zustand";

const courseStore = (set)=>({
    courses:[],
    addCourse:(course)=>{
        set((state)=>({
            courses:[course,...state.courses],
        }))
    },
    removeCourse:(courseId)=>{
        set((state)=>({
            courses:state.courses.filter((item,index)=>item.id !== courseId),
        }))
    },
    toggleCourseStatus:(courseId)=>{
        set((state)=>({
            courses:state.courses.map((item)=> item.id === courseId ? {...item,completed:!item.completed} : item)
        }))
    }
});

const useCourseStore = create(courseStore);

export default useCourseStore;