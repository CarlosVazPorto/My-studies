import sys
import psutil

mem_info = psutil.virtual_memory()
total_memory_bytes = mem_info.total

print(f"Memória total disponível: {total_memory_bytes} bytes.")
