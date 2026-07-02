<template>
    <div>
        <!-- Blurred Background Content (Simulated Dashboard) -->
        <div class="fixed inset-0 z-0 blur-md grayscale-[0.2] opacity-40 pointer-events-none p-margin-desktop">
            <div class="max-w-container-max mx-auto grid grid-cols-12 gap-gutter">
                <div class="col-span-12 flex justify-between items-center mb-xl">
                    <div class="h-10 w-48 bg-surface-container rounded-lg">
                    </div>
                    <div class="h-10 w-32 bg-primary rounded-lg">
                    </div>
                </div>
                <!-- Mock Grid -->
            </div>
        </div>
        <!-- Modal Overlay -->
        <div class="fixed inset-0 z-50 flex items-center justify-center p-margin-mobile bg-on-surface/20 backdrop-blur-sm" id="modalOverlay">
            <!-- Modal Container -->
            <div class="modal-enter glass-morphism w-full max-w-[640px] rounded-2xl shadow-2xl border border-white/40 overflow-hidden flex flex-col max-h-[921px]">
                <!-- Modal Header -->
                <div class="px-xl py-lg border-b border-outline-variant/30 flex items-center justify-between bg-surface/50">
                    <h2 class="font-headline-lg text-headline-lg text-primary">Thêm phương tiện mới</h2>
                    <button class="p-sm rounded-full hover:bg-surface-container-highest transition-colors active:scale-95" onclick="closeModal()">
                        <span class="material-symbols-outlined text-on-surface-variant">close</span>
                    </button>
                </div>
                <!-- Modal Content (Scrollable) -->
                <form class="overflow-y-auto p-xl space-y-lg" id="vehicleForm">
                    <!-- Image Upload Area -->
                    <div class="space-y-sm">
                        <label class="font-label-md text-label-md text-on-surface-variant px-1">Ảnh phương tiện</label>
                        <div class="relative group cursor-pointer border-2 border-dashed border-outline-variant rounded-xl p-xl flex flex-col items-center justify-center gap-md bg-surface-container-low transition-all duration-200 hover:border-primary hover:bg-surface-container-high" id="dropZone">
                            <input accept="image/*" class="absolute inset-0 opacity-0 cursor-pointer" id="fileInput" multiple="" type="file"/>
                            <div class="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <span class="material-symbols-outlined text-primary text-[40px]" data-weight="fill">photo_camera</span>
                            </div>
                            <div class="text-center">
                                <p class="font-title-lg text-title-lg text-on-surface">Kéo và thả ảnh tại đây</p>
                                <p class="font-body-md text-body-md text-on-surface-variant mt-1">Hoặc nhấp để chọn tệp từ máy tính (Tối đa 5 ảnh)</p>
                            </div>
                        </div>
                        <!-- Previews Container -->
                        <div class="grid grid-cols-4 gap-sm mt-md hidden" id="previewGrid">
                            <!-- Preview items will be injected here -->
                        </div>
                    </div>
                    <!-- Form Fields Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-lg">
                        <!-- Vehicle Name -->
                        <div class="space-y-xs">
                            <label class="font-label-md text-label-md text-on-surface-variant px-1" for="vName">Tên phương tiện</label>
                            <input class="w-full h-12 px-md bg-surface-container-lowest border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-body-md" id="vName" placeholder="Ví dụ: Honda SH 150i 2024" type="text"/>
                        </div>
                        <!-- License Plate -->
                        <div class="space-y-xs">
                            <label class="font-label-md text-label-md text-on-surface-variant px-1" for="vPlate">Biển số xe</label>
                            <input class="w-full h-12 px-md bg-surface-container-lowest border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-body-md" id="vPlate" placeholder="Ví dụ: 29A1-123.45" type="text"/>
                        </div>
                        <!-- Rental Price -->
                        <div class="space-y-xs">
                            <label class="font-label-md text-label-md text-on-surface-variant px-1" for="vPrice">Giá thuê / ngày (VNĐ)</label>
                            <div class="relative">
                                <input class="w-full h-12 pl-md pr-12 bg-surface-container-lowest border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-body-md" id="vPrice" placeholder="500,000" type="number"/>
                                <span class="absolute right-4 top-1/2 -translate-y-1/2 font-label-md text-on-surface-variant">đ</span>
                            </div>
                        </div>
                        <!-- Category Dropdown -->
                        <div class="space-y-xs">
                            <label class="font-label-md text-label-md text-on-surface-variant px-1" for="vCategory">Loại xe</label>
                            <div class="relative">
                                <select class="w-full h-12 px-md appearance-none bg-surface-container-lowest border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-body-md cursor-pointer" id="vCategory">
                                    <option disabled="" selected="" value="">Chọn phân khúc</option>
                                    <option value="scooter">Xe tay ga (Scooter)</option>
                                    <option value="manual">Xe số (Manual)</option>
                                    <option value="sport">Xe phân khối lớn (Sport)</option>
                                    <option value="electric">Xe điện (Electric)</option>
                                </select>
                                <span class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">expand_more</span>
                            </div>
                        </div>
                    </div>
                    <!-- Status Toggle -->
                    <div class="flex items-center justify-between p-md bg-surface-container-low rounded-xl border border-outline-variant/30">
                        <div class="flex items-center gap-md">
                            <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <span class="material-symbols-outlined text-primary">check_circle</span>
                            </div>
                            <div>
                                <p class="font-label-md text-label-md text-on-surface">Trạng thái xe</p>
                                <p class="text-[12px] text-on-surface-variant">Xe có sẵn sàng để cho thuê ngay không?</p>
                            </div>
                        </div>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input checked="" class="sr-only peer" id="vStatus" type="checkbox"/>
                            <div class="w-11 h-6 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary">
                            </div>
                            <span class="ms-3 font-label-md text-label-md text-on-surface select-none">Sẵn sàng</span>
                        </label>
                    </div>
                </form>
                <!-- Modal Footer -->
                <div class="px-xl py-lg bg-surface border-t border-outline-variant/30 flex items-center justify-end gap-md">
                    <button class="px-xl h-12 rounded-xl font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high transition-all active:scale-95" onclick="closeModal()">
                        Hủy
                    </button>
                    <button class="px-xl h-12 rounded-xl font-label-md text-label-md bg-primary text-white shadow-lg shadow-primary/20 hover:bg-surface-tint hover:-translate-y-0.5 transition-all active:scale-95" form="vehicleForm" type="submit">
                        Thêm mới
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ThemXeMoi',
    mounted() {
        for(let i=0; i<6; i++) {
            document.write(`
            <div class="col-span-4 aspect-[4/3] bg-surface-container-high rounded-2xl p-md border border-outline-variant">
            <div class="w-full h-2/3 bg-surface-dim rounded-xl mb-md"></div>
            <div class="h-6 w-3/4 bg-surface-dim rounded-md mb-2"></div>
            <div class="h-4 w-1/2 bg-surface-dim rounded-md"></div>
            </div>
            `);
        }
        const dropZone = document.getElementById('dropZone');
        const fileInput = document.getElementById('fileInput');
        const previewGrid = document.getElementById('previewGrid');
        
        // Close modal logic
        function closeModal() {
            const overlay = document.getElementById('modalOverlay');
            overlay.style.opacity = '0';
            overlay.style.transition = 'opacity 0.2s ease-out';
            setTimeout(() => {
                // In a real app, this would remove the modal or navigate away
                alert('Đã đóng popup');
                overlay.style.display = 'none';
            }, 200);
        }
        
        // Drag & Drop visual feedback
        ['dragenter', 'dragover'].forEach(eventName => {
            dropZone.addEventListener(eventName, e => {
                e.preventDefault();
                dropZone.classList.add('drop-zone-active');
            }, false);
        });
        
        ['dragleave', 'drop'].forEach(eventName => {
            dropZone.addEventListener(eventName, e => {
                e.preventDefault();
                dropZone.classList.remove('drop-zone-active');
            }, false);
        });
    }
}
</script>

<style scoped>
.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
body { font-family: 'Inter', sans-serif; }
.glass-morphism {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
}
.modal-enter {
    animation: modalFadeIn 0.3s ease-out forwards;
}
@keyframes modalFadeIn {
    from { opacity: 0; transform: scale(0.95) translateY(10px); }
    to { opacity: 1; transform: scale(1) translateY(0); }
}
.drop-zone-active {
    border-color: #004ac6;
    background-color: rgba(0, 83, 219, 0.05);
}
</style>
