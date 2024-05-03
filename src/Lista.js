import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

// Definimos la nueva página como un componente separado
function ListaTareas({ navigation }) {
  const [tarea, setTarea] = useState('');
  const [tareas, setTareas] = useState([]);

  const manejarAgregarTarea = () => {
    if (tarea.trim() !== '') {
      setTareas([...tareas, tarea]);
      setTarea('');
    }
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Lista de Tareas</Text>
      <View style={styles.contenedorInput}>
        <TextInput
          style={styles.input}
          value={tarea}
          onChangeText={text => setTarea(text)}
          placeholder="Escribe una tarea"
        />
        <TouchableOpacity style={styles.botonAgregar} onPress={manejarAgregarTarea}>
          <Text style={styles.textoBotonAgregar}>Agregar</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tareas}
        renderItem={({ item }) => (
          <View style={styles.contenedorTarea}>
            <Text style={styles.textoTarea}>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

export default ListaTareas; 

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  contenedorInput: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  botonAgregar: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  textoBotonAgregar: {
    color: 'white',
    fontWeight: 'bold',
  },
  contenedorTarea: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  textoTarea: {
    fontSize: 18,
    color: 'black',
  },
});
